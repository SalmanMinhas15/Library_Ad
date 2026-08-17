using System.Collections;
using UnityEngine;
using UnityEngine.Events;
using UnityEngine.Video;
public class Movement : MonoBehaviour
{
    public PlayableDynamicJoystick joystick;
    Vector3 velocity;

    public float moveSpeed;
    public float rotationSpeed;
    public bool canMove;
    public static Movement instance;
    void Awake()
    {
        instance=this;
        Initialize();
    }
    public void Initialize()
    {
        EnableMovement(true);
    }

    void Update()
    {
        if (canMove)
        {
            Move();
        }
       
    }
    void Move()
    {
        float horizontalInput =-1f*joystick.Horizontal;
        float verticalInput =-1f*joystick.Vertical;

        Vector3 moveDirection = new Vector3(horizontalInput, 0f, verticalInput).normalized;
        Vector3 _targetPosition=transform.position+(moveDirection);
        transform.position=Vector3.Lerp(transform.position,_targetPosition,moveSpeed*Time.deltaTime);
        // controller.Move(moveDirection * moveSpeed * Time.deltaTime);

        // if (moveDirection.sqrMagnitude <= 0 && playerAnimator != null)
        // {
        //     playerAnimator.SetInteger("move", 0);
        //     return;
        // }
        
        // rb.MovePosition(rb.position + moveDirection * moveSpeed * Time.deltaTime);
        // Animation
       
        // var targetDirection = Vector3.RotateTowards(transform.forward, moveDirection, rotationSpeed * Time.deltaTime, 0.0f);
        // transform.rotation = Quaternion.LookRotation(targetDirection);
    }
    public void EnableMovement(bool _enable)
    {
        canMove=_enable;
    }
}
