using System.Collections;
using UnityEngine;

public class Player : MonoBehaviour
{
     public static Player Instance;

     public Transform headPoint;
    [SerializeField] PlayerCatchPoint[] playerCatchPoints;
    [SerializeField] float catchDuration = 0.1f;
    [SerializeField] float moveBookDuration = 1;

    public int currentPickedBooks = 0;

    // bool isFirstBookCatched = false;
    float halfDuration;
    private void Awake()
    {
        if(Instance == null)
        {
            Instance = this;
        }
        halfDuration = catchDuration / 2;
    }
    public bool CatchBook(Transform book)
    {
        // if(!isFirstBookCatched)
        // {
        //     GameController.instance.StartAnimCircles();
        //     isFirstBookCatched = true;
        // }
        if(currentPickedBooks + 1 == 1)
        {
            CharacterMovement.instance.HideMarker();
        }
        if(currentPickedBooks + 1 >=10)
        {
            GameController.instance.NextTargetShelf();
        }
        PlayerCatchPoint point = GetFreeCatchPoint();
        if(point != null )
        {
            AudioManager.instance.PlayPickBookSound();
            CharacterMovement.instance.PlayAnimation("HoldBucket");
            currentPickedBooks++;
            StartCoroutine(CatchBookRoutine(point, book));
            return true;
        }
        return false;
    }
    IEnumerator CatchBookRoutine(PlayerCatchPoint point, Transform book)
    {
        Vector3 start = book.position;
        Vector3 end = point.catchPoint.position;

        Vector3 middle = Vector3.Lerp(start, end, 0.5f);

        // How far the book goes forward
        Vector3 forward = transform.forward * 1.0f;

        // High point
        middle += forward;
        middle += Vector3.up * 1.5f;

        Quaternion startRotation = book.rotation;
        Quaternion endRotation = point.catchPoint.rotation;

        // First half: book -> middle
        yield return MoveBezier(
            book,
            start,
            Vector3.Lerp(start, middle, 0.5f) + Vector3.up * 0.5f,
            middle,
            startRotation,
            Quaternion.Slerp(startRotation, endRotation, 0.5f),
            halfDuration
        );

        // Second half: middle -> hand
        yield return MoveBezier(
            book,
            middle,
            Vector3.Lerp(middle, end, 0.5f) + Vector3.up * 0.5f,
            end,
            Quaternion.Slerp(startRotation, endRotation, 0.5f),
            endRotation,
            halfDuration
        );

        book.position = end;
        book.rotation = endRotation;
        book.SetParent(point.catchPoint);
        book.localPosition = Vector3.zero;
        book.localRotation = Quaternion.identity;
    }
    IEnumerator MoveBezier(
     Transform book,
     Vector3 start,
     Vector3 control,
     Vector3 end,
     Quaternion startRotation,
     Quaternion endRotation,
     float duration)
    {
        float elapsed = 0f;

        while (elapsed < duration)
        {
            elapsed += Time.deltaTime;

            float t = Mathf.Clamp01(elapsed / duration);

            // Position
            Vector3 position =
                (1 - t) * (1 - t) * start +
                2 * (1 - t) * t * control +
                t * t * end;

            book.position = position;

            // Rotation
            book.rotation = Quaternion.Slerp(
                startRotation,
                endRotation,
                t
            );

            yield return null;
        }

        book.position = end;
        book.rotation = endRotation;
    }
    public PlayerCatchPoint GetFreeCatchPoint()
    {
        for(int i = 0; i < playerCatchPoints.Length; i++)
        {
            if(!playerCatchPoints[i].isOccupied)
            {
                playerCatchPoints[i].isOccupied = true;
                return playerCatchPoints[i];
            }
        }
        return null;
    }

    #region  shelf interact

    public IEnumerator PlaceBooksOnShelf(Shelf.ShelfPoint[] shelfPoints, Shelf shelf)
    {
        // Debug.Log("placebook called");
        CameraFollower.instance.MoveCamera(shelf.shelf_Cam);
        bool isAnyBookPlaced = false;
        yield return new WaitForSeconds(0.5f);
        for (int i = playerCatchPoints.Length - 1; i >=0; i--)
        {
            
            if(playerCatchPoints[i].isOccupied)
            {
                // Debug.Log("playerPoint");
                foreach(Shelf.ShelfPoint shelfPoint in shelfPoints)
                {
                    if(!shelfPoint.isOccupied)
                    {
                        Transform book = playerCatchPoints[i].catchPoint.GetChild(0);
                        shelf.placedBooksCount ++;
                        currentPickedBooks--;
                        GameController.instance.totalPlacedBooks++;
                        AudioManager.instance.PlayPopBookSound();
                        playerCatchPoints[i].isOccupied = false;
                        shelfPoint.isOccupied = true;
                        yield return StartCoroutine(MoveBook(book,shelfPoint.point));
                        isAnyBookPlaced = true;
                        break;
                    }
                }
            }
            if (shelf.placedBooksCount >= 10)
            {
                StopCoroutine(shelf.AnimateCircle());
                shelf.circle.gameObject.SetActive(false);
                // GameController.instance.NextTargetShelf();
                if(GameController.instance.totalPlacedBooks != 30)
                {
                   GameController.instance.NextBooksTarget();
                }
                // UIManager.instance.DisplayInstruction(true,"Collect Books");
                break;
            }
        }
        // CharacterMovement.instance.EnableMovement(true);
        if(isAnyBookPlaced)
        {
            yield return new WaitForSeconds(0.7f);
        }    
        if(!isAnyBookPlaced)
        {
            StartCoroutine(UIManager.instance.DisplayInfoMsg("No Book to place"));
        } 
        CameraFollower.instance.ResetCamera();
        if(GameController.instance.totalPlacedBooks >=30)
        {
            CharacterMovement.instance.PlayAnimation("EmptyHand");
            UIManager.instance.DisplayInstruction(true,"Completed Successfuly");
            GameController.instance.OnEndGame();
            yield break;
        }
        if(currentPickedBooks <=0)
        {
            CharacterMovement.instance.PlayAnimation("EmptyHand");
        }
        UIManager.instance.EnablePlayerControls(true);
        UIManager.instance.DisplayInstruction(false);
        CharacterMovement.instance.EnableMovement(true);
    }
    IEnumerator MoveBook(Transform book,Transform shelfPoint )
    {
        float elapsed = 0;
        Vector3 startPos = book.position;
        Vector3 endPos = shelfPoint.position;
        Quaternion startRot = book.rotation;
        Quaternion endRot = shelfPoint.rotation;
        while(elapsed < moveBookDuration)
        {
            elapsed += Time.deltaTime;
            float t = Mathf.Clamp01(elapsed / moveBookDuration);
            book.position = Vector3.Lerp(startPos,endPos,t);
            book.rotation = Quaternion.Slerp(startRot,endRot,t);
            yield return null;
        }
        book.position = endPos;
        book.rotation = endRot;
        book.SetParent(shelfPoint);
        book.localPosition = Vector3.zero;
        book.localRotation = Quaternion.identity;
    }
    #endregion
    [System.Serializable]
    public class PlayerCatchPoint
    {
        public Transform catchPoint;
        public bool isOccupied = false;
    }
}
