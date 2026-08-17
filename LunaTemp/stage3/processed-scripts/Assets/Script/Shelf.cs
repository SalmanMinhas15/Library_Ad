using System.Collections;
using UnityEngine;

public class Shelf : MonoBehaviour
{
    public ShelfPoint [] shelfPoints;
    public int placedBooksCount = 0;
    [SerializeField] Transform playerStandPoint;
    public Transform circle;

    float animDuration = 0.4f;
    float minScale = 0.55f;
    float maxScale = 0.75f;
    public Transform shelf_Cam;
    void Start()
    {
        StartCoroutine(AnimateCircle());
    }
    // void Start()
    // {
    //     AnimateCircle();
    // }
    public IEnumerator AnimateCircle()
    {
        Vector3 min = Vector3.one * minScale;
        Vector3 max = Vector3.one * maxScale;
        float elapsed = 0f;
        while(true)
        {
            elapsed += Time.deltaTime;
            float t = Mathf.PingPong(elapsed / animDuration,1f);
            circle.localScale = Vector3.Lerp(min,max,t);
            yield return null;
        }
    }
    void OnTriggerEnter(Collider other)
    {
        CharacterMovement.instance.HideMarker();
        // Debug.Log("shelf trigger");
        if(placedBooksCount >= 10)
        {
            UIManager.instance.DisplayInfoMsg("Bucket Filled");
            GetComponent<Collider>().enabled = false;
            return;
        }
        AudioManager.instance.PlayCheckPointSound();
        other.transform.position = playerStandPoint.position;
        other.transform.rotation = playerStandPoint.rotation;
        UIManager.instance.DisplayInstruction(true,"Place Books");
        CharacterMovement.instance.EnableMovement(false);
        // CharacterMovement.instance.(false);
        UIManager.instance.EnablePlayerControls(false);
        StartCoroutine(Player.Instance.PlaceBooksOnShelf(shelfPoints,this));
    }

    [System.Serializable]
    public class ShelfPoint
    {
        public Transform point;
        public bool isOccupied;
    }
}
