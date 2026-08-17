using UnityEngine;

public class GameController : MonoBehaviour
{
    public static GameController instance;

    [SerializeField] Transform confettiCamera;
    public Transform confettiParticles;
    [SerializeField] GameObject[] TargetPoins;
    [SerializeField] Shelf[] shelfs;
    // [SerializeField] Transform[] targetCircles;

    int currentTargetIndex = 0;
    public int totalPlacedBooks = 0;
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
        CharacterMovement.instance.DisplayTargetMarker(TargetPoins[0].transform);
        currentTargetIndex++;
        UIManager.instance.DisplayInstruction(true, "Collect Books");
    }
    void InitializeGame()
    {
        CharacterMovement.instance.Initialize();
    }
    // public void StartAnimCircles()
    // {
    //     foreach(Shelf s in shelfs)
    //     {
    //         StartCoroutine(s.AnimateCircle());
    //     }
    // }
    public void PlayConfetti()
    {
        // confettiCamera.SetParent(Player.Instance.headPoint);
        // confettiCamera.localPosition = Vector3.zero;
        // confettiCamera.localRotation = Quaternion.identity;
        confettiParticles.gameObject.SetActive(true);
        for (int i = 0; i < confettiParticles.childCount; i++)
        {
            confettiParticles.GetChild(i).GetComponent<ParticleSystem>().Play();
        }
    }
    public void NextTargetMarker()
    {
        Debug.Log("current target indx "+ currentTargetIndex);
        Debug.Log(TargetPoins[currentTargetIndex].name);
        CharacterMovement.instance.DisplayTargetMarker(TargetPoins[currentTargetIndex].transform);
        currentTargetIndex++;
    }
    public void OnEndGame()
    {
        PlayConfetti();
        AudioManager.instance.PlayLvlCmpltSnd();
        StartCoroutine(UIManager.instance.EndGame());
    }
    public void NextTargetShelf()
    {
        Debug.Log("current target indx in nextTargetShuffle()  " + currentTargetIndex);
        TargetPoins[currentTargetIndex].SetActive(true);
        NextTargetMarker();
        UIManager.instance.DisplayInstruction(true,"PLace Books in shelf");
        
    }
    public void NextBooksTarget()
    {
        Debug.Log("current target indx in nextBooksTarget()  " + currentTargetIndex);
        TargetPoins[currentTargetIndex].SetActive(true);
        NextTargetMarker();
        UIManager.instance.DisplayInstruction(true, "Collect Books");
    }
}
