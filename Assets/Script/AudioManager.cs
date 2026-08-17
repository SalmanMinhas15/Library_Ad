using UnityEngine;

public class AudioManager : MonoBehaviour
{
    public static AudioManager instance;

    [SerializeField] AudioSource bgAS;
    [SerializeField] AudioSource inGameAS;
    [SerializeField] AudioClip PickTomato;

    [SerializeField] AudioClip PopTomato;
    [SerializeField] AudioClip checkPoint;

    [SerializeField] AudioClip levelComplete;
    void Awake()
    {
        if(instance == null)
        {
            instance = this;
        }
    }
    void Start()
    {
        PlayBG();
    }
    public void PlayBG()
    {
        bgAS.Play();
    }
    public void PlayPickBookSound()
    {
        inGameAS.PlayOneShot(PickTomato );
    }
    public void PlayPopBookSound()
    {
        inGameAS.PlayOneShot(PopTomato);
    }
    public void PlayCheckPointSound()
    {
        inGameAS.PlayOneShot(checkPoint);
    }
    public void PlayLvlCmpltSnd()
    {
        inGameAS.PlayOneShot(levelComplete);
    }
}
