using UnityEngine;

public class Book : MonoBehaviour
{
    private bool isCaught;

    private void OnTriggerEnter(Collider other)
    {
        // print("book triggering");
        if (isCaught)
            return;

        if (!other.CompareTag("Player"))
            return;

        isCaught = Player.Instance.CatchBook(transform);
        if(isCaught)
        {
            GetComponent<Collider>().enabled = false;
        }
    }
}