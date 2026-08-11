using UnityEngine;

public class GameController : MonoBehaviour
{
    public static GameController instance;
    public Transform confettiParticles;
    // [SerializeField] GameObject[] TargetPoins;

    // [SerializeField] Transform[] targetCircles;

    // [SerializeField] Camera playerCamera;
    int currentTargetIndex = 0;

    void Awake()
    {
        if (instance == null)
        {
            instance = this;
        }
        else
        {
            Destroy(gameObject);
        }
    }
    void Start()
    {
        InitializeGame();
    }
    void InitializeGame()
    {
        CharacterMovement.instance.Initialize();
    }
    
    // public void SwitchToInnerCamera()
    // {
    //     playerCamera.gameObject.SetActive(false);
    //     machineCamera.gameObject.SetActive(true);
    //     UIManager.instance.DisableUIControls();
    // }
    // public void SwitchToPlayerCamera()
    // {
    //     machineCamera.gameObject.SetActive(false);
    //     playerCamera.gameObject.SetActive(true);
    //     UIManager.instance.EnableUIControls();
    // }
    public void PlayConfetti()
    {
        confettiParticles.gameObject.SetActive(true);
        for (int i = 0; i < confettiParticles.childCount; i++)
        {
            confettiParticles.GetChild(i).GetComponent<ParticleSystem>().Play();
        }
    }
    // public void OnEndGame()
    // {
    //     PlayConfetti();
    //     AudioManager.instance.PlayLvlCmpltSnd();
    //     StartCoroutine(UIManager.instance.EndGame());
    // }
}
