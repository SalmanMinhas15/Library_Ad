using UnityEngine;
using System.Collections;

public class CameraFollower : MonoBehaviour
{

    public static CameraFollower instance;
    public Vector3 positionOffset;
    [SerializeField] Vector3 inRoomPositionOffset;//Vector3(0,7.4,4.25)
    public float followSpeed;
    public Transform character;

    Quaternion initialRotation;

    Vector3 currentPosition;

    Quaternion currentRotation;

    Coroutine cameraRoutine;

    float duration = 0.5f;
    
    //Vector3 positionOffset;
    bool canFollowCam=true;

    void Awake()
    {
        if(instance == null)
        {
            instance = this;
        }
        initialRotation=transform.rotation;
        //positionOffset=character.position-transform.position;
    }
    private Vector3 cameraVelocity = Vector3.zero;

    // You can adjust this to make the camera follow tighter or looser (0.1f is a good start)
    // void LateUpdate()
    // {
    //     if (canFollowCam && character!=null)
    //     {
    //         Vector3 _target=character.position+positionOffset;
    //         // transform.position=Vector3.Lerp(transform.position,_target,followSpeed*Time.deltaTime);
    //         transform.position = Vector3.SmoothDamp(
    //             transform.position,
    //             _target,
    //             ref cameraVelocity,
    //             smoothTime
    //         );
    //     }
    // }
    void LateUpdate()
    {
        if (canFollowCam && character != null)
        {
            transform.position = character.position + positionOffset;
        }
    }
    public void EnableFollowCam(bool _enable)
    {
        canFollowCam=_enable;
    }
    public (Vector3,Quaternion) GetCamPosition()
    {
        return (character.position+positionOffset,initialRotation);
    }

    public void MoveCamera(Transform target)
    {
        if(cameraRoutine == null)
        {
          cameraRoutine = StartCoroutine(MoveCameraRoutine(target));
        }
    }
    IEnumerator MoveCameraRoutine(Transform target)
    {
        Vector3 startPos = transform.position;
        Quaternion startRot = transform.rotation;
        currentPosition = startPos;
        currentRotation = startRot;
        canFollowCam = false;
        float elapsed = 0f;

        while (elapsed < duration)
        {
            elapsed += Time.deltaTime;

            float t = Mathf.Clamp01(elapsed / duration);

            // Ease In-Out
            t = Mathf.SmoothStep(0f, 1f, t);

            transform.position = Vector3.Lerp(startPos, target.position, t);
            transform.rotation = Quaternion.Slerp(startRot, target.rotation, t);

            yield return null;
        }

        transform.position = target.position;
        transform.rotation = target.rotation;
    }
    public IEnumerator RoomViewCam(Transform target)
    {
        Vector3 startPos = transform.position;
        Quaternion startRot = transform.rotation;
        currentPosition = startPos;
        currentRotation = startRot;
        canFollowCam = false;
        float elapsed = 0f;

        while (elapsed < duration)
        {
            elapsed += Time.deltaTime;

            float t = Mathf.Clamp01(elapsed / duration);

            // Ease In-Out
            t = Mathf.SmoothStep(0f, 1f, t);

            transform.position = Vector3.Lerp(startPos, target.position, t);
            transform.rotation = Quaternion.Slerp(startRot, target.rotation, t);

            yield return null;
        }

        transform.position = target.position;
        transform.rotation = target.rotation;
        yield return new WaitForSeconds(0.5f);
        // ResetCamera();
        transform.position = currentPosition;
        transform.rotation = currentRotation;
        canFollowCam = true;
        
        UIManager.instance.EnablePlayerControls(true);
        CharacterMovement.instance.EnableMovement(true);
        positionOffset = inRoomPositionOffset;
    }

    public void ResetCamera()
    {
        if(cameraRoutine != null)
        {
            StopCoroutine(cameraRoutine);
            cameraRoutine = null;
        }
        transform.position = currentPosition;
        transform.rotation = currentRotation;
        canFollowCam = true;
    }
}
