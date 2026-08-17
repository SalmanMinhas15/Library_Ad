using UnityEngine;

public class Door : MonoBehaviour
{
    [SerializeField] Transform door_Cam;
    void OnTriggerEnter(Collider other)
    {
        AudioManager.instance.PlayCheckPointSound();
        GetComponent<Collider>().enabled = false;
        CharacterMovement.instance.HideMarker();
        CharacterMovement.instance.EnableMovement(false);
        UIManager.instance.EnablePlayerControls(false);
        StartCoroutine(CameraFollower.instance.RoomViewCam(door_Cam));
    }
}
