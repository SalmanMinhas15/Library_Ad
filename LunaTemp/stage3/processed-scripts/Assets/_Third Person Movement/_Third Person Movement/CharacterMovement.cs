using System.Collections;
using UnityEngine;
using UnityEngine.Events;
public class CharacterMovement : MonoBehaviour
{
    public PlayableDynamicJoystick joystick;
    public CameraFollower playerCamera;
    public GameObject targetMarker;
    [SerializeField] Animator playerAnimator;


    public float moveSpeed;
    public float rotationSpeed;
    public float camSwitchingTime=0.5f;
    public bool canMove;
    bool displayMarker;
    Transform markerTarget;

    // [SerializeField] GameObject bucket;
    // public Transform bucketPoint;
    [SerializeField] Rigidbody rb;

    private static readonly int MoveHash = Animator.StringToHash("move");

    private int _currentMoveState = -1;
    private Vector3 _moveDirection;
    public static CharacterMovement instance;
    void Awake()
    {
        instance=this;
        // Initialize();
    }
    public void Initialize()
    {
        // rb = GetComponent<Rigidbody>();
        EnableCameraFollow(true);
        EnableMovement(true);
        targetMarker.SetActive(false);

    }
    void Update()
    {
        if (canMove)
        {
            ProcessInputAndAnimation();
        }
        else
        {
            _moveDirection = Vector3.zero; // Stop moving if canMove is false
        }

        if (displayMarker && markerTarget != null)
        {
            targetMarker.transform.LookAt(markerTarget);
            Vector3 _angle = targetMarker.transform.eulerAngles;
            _angle.x = 0f;
            _angle.z = 0f;
            targetMarker.transform.eulerAngles = _angle;
        }
    }

    // Handle Physics movement exactly here
    void FixedUpdate()
    {
        if (canMove && _moveDirection.sqrMagnitude > 0.01f)
        {
            // MovePosition prevents walking through walls
            rb.MovePosition(rb.position + _moveDirection * moveSpeed * Time.fixedDeltaTime);
        }
    }

    void ProcessInputAndAnimation()
    {
        float horizontalInput = 1f * joystick.Horizontal;
        float verticalInput = 1f * joystick.Vertical;

        _moveDirection = new Vector3(horizontalInput, 0f, verticalInput).normalized;

        // 1. Check Idle / Deadzone State
        if (_moveDirection.sqrMagnitude <= 0.01f)
        {
            if (playerAnimator != null && _currentMoveState != 0)
            {
                playerAnimator.SetInteger(MoveHash, 0);
                _currentMoveState = 0;
            }
            return;
        }

        // 2. Set Run Animation State
        if (playerAnimator != null && _currentMoveState != 1)
        {
            playerAnimator.SetInteger(MoveHash, 1);
            _currentMoveState = 1;
        }

        // 3. Smooth Rotation
        var targetDirection = Vector3.RotateTowards(transform.forward, _moveDirection, rotationSpeed * Time.deltaTime, 0.0f);
        transform.rotation = Quaternion.LookRotation(targetDirection);
    }
    public void EnableMovement(bool _enable)
    {
        canMove = _enable;
        // controller.enabled=_enable;
        if (!_enable)
        {
            joystick.SimulatePointerUp();
            playerAnimator.SetInteger("move", 0);
        }
    }
    bool isRepositioning = false;
    public IEnumerator UpdatePlayerPosition(Transform _target)
    {
        if (isRepositioning)
            yield break;
        isRepositioning = true;
        EnableMovement(false);
        yield return null;
        transform.position = _target.position;
        transform.rotation = _target.rotation;
        yield return null;
        isRepositioning = false;
        EnableMovement(true);

    }
    public void PlayAnimation(string _animName)
    {
        playerAnimator.Play(_animName);
    }
  
    public void EnablePlayerCamera(bool _enable)
    {
        playerCamera.gameObject.SetActive(_enable);
    }
    public void EnableCameraFollow(bool _enable)
    {
        playerCamera.EnableFollowCam(_enable);
    }

    #region Marker Update
    public void DisplayTargetMarker(Transform _target)
    {
        markerTarget = _target;
        displayMarker = true;
        targetMarker.SetActive(true);
        // StartCoroutine(AnimateCircle(_targetCircle));
        
    }
    IEnumerator AnimateCircle(Transform _targetCircle)
    {
        while (true)
        {
            float t = (Mathf.Sin(Time.time * 10) + 1f) * 0.5f;

            _targetCircle.localScale = Vector3.Lerp(
                Vector3.one,
                Vector3.one * (1f + 0.2f),
                t);

            yield return null;
        }
    }
    public void HideMarker()
    {
        targetMarker.SetActive(false);

    }
    // public void ShowBucket()
    // {
    //     bucket.SetActive(true);
    // }
    // public void HideBucket()
    // {
    //     bucket.SetActive(false);
    // }
    #endregion
    }
