using System.Collections.Generic;
using UnityEngine;
using UnityEngine.EventSystems;
using UnityEngine.UI;
public class PlayableDynamicJoystick : MonoBehaviour
{
    public float deadZone=0f;
    public float handleRange=1f;
    public Camera uiCamera;
    public RectTransform background;
    public RectTransform joystickHandle;
    public AxisOptions axisOptions;
    public float maxRadius = 10;

    private Vector2 startPos;
    private Vector2 input;
    Vector2 fixedPosition;
    private Camera cam;
    private RectTransform baseRect;

    private Canvas canvas;
    float targetAlphaUP = 0.5f;
    float targetAlphaDown = 1.0f;
    bool isPointerDown=false;
    
    [System.Serializable]
    public enum AxisOptions { Both, Horizontal, Vertical }

#region Public Methods
public float Horizontal { get { return -input.x; } }
    public float Vertical { get { return -input.y; } }
    public Vector2 Direction { get { return new Vector2(Horizontal, Vertical); } }

    public void SimulatePointerUp()
    {
        OnMouseUp(Input.mousePosition);
    }
#endregion

    void Start()
    {
        baseRect = GetComponent<RectTransform>();
        canvas = GetComponentInParent<Canvas>();
        if (canvas == null)
        {
            Debug.LogError("The Joystick is not placed inside a canvas");
        }
        Vector2 center = new Vector2(0.5f, 0.5f);
        background.pivot = center;
        joystickHandle.anchorMin = center;
        joystickHandle.anchorMax = center;
        joystickHandle.pivot = center;
        joystickHandle.anchoredPosition = Vector2.zero;
        if (canvas.renderMode == RenderMode.ScreenSpaceCamera)
        {
            cam = canvas.worldCamera;

        }
        
        Color currentColor = background.gameObject.GetComponent<Image>().color;
        currentColor.a = Mathf.Clamp01(targetAlphaUP);
        background.gameObject.GetComponent<Image>().color = currentColor;
        background.transform.GetChild(0).gameObject.GetComponent<Image>().color = currentColor;
        fixedPosition = background.anchoredPosition;
    }


    void Update()
    {
        if (!isPointerDown)
        {
            if (IsPointerOverUI())
                return;
        }
        if (Input.GetMouseButtonDown(0))
        {
            OnMouseDown(Input.mousePosition);
        }

        if (Input.GetMouseButton(0) && isPointerDown)
        {
            OnDrag(Input.mousePosition);
        }

        if (Input.GetMouseButtonUp(0))
        {
           OnMouseUp(Input.mousePosition);
        }
    }
    bool IsPointerOverUI()
    {
        if (EventSystem.current == null)
            return false;

        PointerEventData pointerData = new PointerEventData(EventSystem.current);
        pointerData.position = Input.mousePosition;
        List<RaycastResult> results = new List<RaycastResult>();
        EventSystem.current.RaycastAll(pointerData, results);

        return results.Count > 0;
    }
#region Pointer handlers
    void OnDrag(Vector2 _mousePosition)
    {
        Vector2 position = RectTransformUtility.WorldToScreenPoint(cam, background.position);
        Vector2 radius = background.sizeDelta / 2;
        input = (_mousePosition - position) / (radius * canvas.scaleFactor);
        FormatInput();
        HandleInput(input.magnitude, input.normalized, radius, cam);
        joystickHandle.anchoredPosition = input * radius * handleRange;
    }
    void OnMouseDown(Vector2 _mousePosition)
    {
        isPointerDown=true;
        input = Vector2.zero;
        UpdateBackGround(_mousePosition,targetAlphaDown);
        OnDrag(_mousePosition);
    }
    void OnMouseUp(Vector2 _mousePosition)
    {
        isPointerDown=false;
        UpdateBackGround(_mousePosition,targetAlphaUP);
        background.anchoredPosition = fixedPosition;
        input = Vector2.zero;
        joystickHandle.anchoredPosition = Vector2.zero;
    }
#endregion

#region Helper Methods
    void UpdateBackGround(Vector2 _mousePosition,float _alphaVal)
    {
        background.anchoredPosition = ScreenPointToAnchoredPosition(_mousePosition);
        Color currentColor = background.gameObject.GetComponent<Image>().color;
        currentColor.a = Mathf.Clamp01(_alphaVal);
        background.gameObject.GetComponent<Image>().color = currentColor;
        background.transform.GetChild(0).gameObject.GetComponent<Image>().color = currentColor;
    }
    void SetBackGroundPostion()
    {
        // uiCamera.screen
    }
    Vector2 ScreenPointToAnchoredPosition(Vector2 screenPosition)
    {
        Vector2 localPoint = Vector2.zero;
       
        if (RectTransformUtility.ScreenPointToLocalPointInRectangle(baseRect, screenPosition, cam, out localPoint))
        {
            Vector2 pivotOffset = baseRect.pivot * baseRect.sizeDelta;
            Vector2 _debug=localPoint - (background.anchorMax * baseRect.sizeDelta) + pivotOffset;

            return localPoint - (background.anchorMax * baseRect.sizeDelta) + pivotOffset;
        }
        return Vector2.zero;
    }

    void HandleInput(float magnitude, Vector2 normalised, Vector2 radius, Camera cam)
    {
        if (magnitude > deadZone)
        {
            if (magnitude > 1)
                input = normalised;
        }
        else
            input = Vector2.zero;
    }

    void FormatInput()
    {
        if (axisOptions == AxisOptions.Horizontal)
            input = new Vector2(input.x, 0f);
        else if (axisOptions == AxisOptions.Vertical)
            input = new Vector2(0f, input.y);
    }
    #endregion


}
