using System.Collections;
using UnityEngine;
using UnityEngine.UI;
public class UIManager : MonoBehaviour
{
    [Header("UI Panels")]
    // public GameObject loadingPanel;
    public GameObject playerControlPanel;
    public GameObject endInstructionPanel;

    [Header("Instruction Fields")]
    public GameObject instructionCntnr;
    public Text instructionText;
 
    [SerializeField] GameObject infoImg;
    [SerializeField] Text infoTxt;
  


    public static UIManager instance;

    
    void Awake()
    {
        instance=this;
    }
    public void EnablePlayerControls(bool _enable)
    {
        playerControlPanel.SetActive(_enable);
    }
    #region Instruction
    public void DisplayInstruction(bool _show,string _msg="")
    {
        instructionText.text=_msg;
        instructionCntnr.GetComponent<Animator>().SetBool("Show",_show);
    }
    public IEnumerator DisplayInfoMsg(string _msg ="")
    {
        infoTxt.text = _msg;
        infoImg.SetActive(true);
        yield return new WaitForSeconds(1);
        infoImg.SetActive(false);
    }
    #endregion

    #region CTA Handling
    public void OnCTAPressed()
    {
        Luna.Unity.Playable.InstallFullGame();
        Debug.Log("CTA pressed");
    }
    public IEnumerator EndGame()
    {
        yield return new WaitForSeconds(2f);
        Luna.Unity.LifeCycle.GameEnded();
        endInstructionPanel.SetActive(true);
    }
    public void DisableUIControls()
    {
        playerControlPanel.SetActive(false);
        instructionCntnr.SetActive(false);
    }
    public void EnableUIControls()
    {
        playerControlPanel.SetActive(true);
        instructionCntnr.SetActive(true);
    }
    #endregion
}
