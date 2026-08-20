if ( TRACE ) { TRACE( JSON.parse( '["AudioManager#Awake","AudioManager#Start","AudioManager#PlayPickBookSound","AudioManager#PlayPopBookSound","AudioManager#PlayCheckPointSound","AudioManager#PlayLvlCmpltSnd","Book#OnTriggerEnter","CameraFollower#init","CameraFollower#Awake","CameraFollower#LateUpdate","CameraFollower#EnableFollowCam","CameraFollower#GetCamPosition","CameraFollower#MoveCamera","CameraFollower#MoveCameraRoutine","CameraFollower#RoomViewCam","CameraFollower#ResetCamera","CharacterMovement#init","CharacterMovement#init","CharacterMovement#Awake","CharacterMovement#Initialize","CharacterMovement#Update","CharacterMovement#FixedUpdate","CharacterMovement#ProcessInputAndAnimation","CharacterMovement#EnableMovement","CharacterMovement#UpdatePlayerPosition","CharacterMovement#PlayAnimation","CharacterMovement#EnablePlayerCamera","CharacterMovement#EnableCameraFollow","CharacterMovement#DisplayTargetMarker","CharacterMovement#AnimateCircle","CharacterMovement#HideMarker","Door#OnTriggerEnter","GameController#init","GameController#Awake","GameController#Start","GameController#InitializeGame","GameController#PlayConfetti","GameController#NextTargetMarker","GameController#OnEndGame","GameController#NextTargetShelf","GameController#NextBooksTarget","Movement#init","Movement#Awake","Movement#Initialize","Movement#Update","Movement#Move","Movement#EnableMovement","PlayableDynamicJoystick#Horizontal#get","PlayableDynamicJoystick#Vertical#get","PlayableDynamicJoystick#Direction#get","PlayableDynamicJoystick#init","PlayableDynamicJoystick#SimulatePointerUp","PlayableDynamicJoystick#Start","PlayableDynamicJoystick#Update","PlayableDynamicJoystick#IsPointerOverUI","PlayableDynamicJoystick#OnDrag","PlayableDynamicJoystick#OnMouseDown","PlayableDynamicJoystick#OnMouseUp","PlayableDynamicJoystick#UpdateBackGround","PlayableDynamicJoystick#SetBackGroundPostion","PlayableDynamicJoystick#ScreenPointToAnchoredPosition","PlayableDynamicJoystick#HandleInput","PlayableDynamicJoystick#FormatInput","Player#init","Player#Awake","Player#CatchBook","Player#CatchBookRoutine","Player#MoveBezier","Player#GetFreeCatchPoint","Player#PlaceBooksOnShelf","Player#MoveBook","Player.PlayerCatchPoint#init","Shelf#init","Shelf#Start","Shelf#AnimateCircle","Shelf#OnTriggerEnter","UIManager#Awake","UIManager#EnablePlayerControls","UIManager#DisplayInstruction","UIManager#DisplayInfoMsg","UIManager#OnCTAPressed","UIManager#EndGame","UIManager#DisableUIControls","UIManager#EnableUIControls"]' ) ); }
/**
 * @version 1.0.9728.30246
 * @copyright anton
 * @compiler Bridge.NET 17.9.42-luna
 */
Bridge.assembly("UnityScriptsCompiler", function ($asm, globals) {
    "use strict";

    /*AudioManager start.*/
    Bridge.define("AudioManager", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                instance: null
            }
        },
        fields: {
            bgAS: null,
            inGameAS: null,
            PickTomato: null,
            PopTomato: null,
            checkPoint: null,
            levelComplete: null
        },
        methods: {
            /*AudioManager.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "AudioManager#Awake", this ); }

                if (UnityEngine.MonoBehaviour.op_Equality(AudioManager.instance, null)) {
                    AudioManager.instance = this;
                }
            },
            /*AudioManager.Awake end.*/

            /*AudioManager.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "AudioManager#Start", this ); }

                this.bgAS.Play();
            },
            /*AudioManager.Start end.*/

            /*AudioManager.PlayPickBookSound start.*/
            PlayPickBookSound: function () {
if ( TRACE ) { TRACE( "AudioManager#PlayPickBookSound", this ); }

                this.inGameAS.PlayOneShot(this.PickTomato);
            },
            /*AudioManager.PlayPickBookSound end.*/

            /*AudioManager.PlayPopBookSound start.*/
            PlayPopBookSound: function () {
if ( TRACE ) { TRACE( "AudioManager#PlayPopBookSound", this ); }

                this.inGameAS.PlayOneShot(this.PopTomato);
            },
            /*AudioManager.PlayPopBookSound end.*/

            /*AudioManager.PlayCheckPointSound start.*/
            PlayCheckPointSound: function () {
if ( TRACE ) { TRACE( "AudioManager#PlayCheckPointSound", this ); }

                this.inGameAS.PlayOneShot(this.checkPoint);
            },
            /*AudioManager.PlayCheckPointSound end.*/

            /*AudioManager.PlayLvlCmpltSnd start.*/
            PlayLvlCmpltSnd: function () {
if ( TRACE ) { TRACE( "AudioManager#PlayLvlCmpltSnd", this ); }

                this.inGameAS.PlayOneShot(this.levelComplete);
            },
            /*AudioManager.PlayLvlCmpltSnd end.*/


        }
    });
    /*AudioManager end.*/

    /*Book start.*/
    Bridge.define("Book", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            isCaught: false
        },
        methods: {
            /*Book.OnTriggerEnter start.*/
            OnTriggerEnter: function (other) {
if ( TRACE ) { TRACE( "Book#OnTriggerEnter", this ); }

                // print("book triggering");
                if (this.isCaught) {
                    return;
                }

                if (!other.CompareTag("Player")) {
                    return;
                }

                this.isCaught = Player.Instance.CatchBook(this.transform);
                if (this.isCaught) {
                    this.GetComponent(UnityEngine.Collider).enabled = false;
                }
            },
            /*Book.OnTriggerEnter end.*/


        }
    });
    /*Book end.*/

    /*CameraFollower start.*/
    Bridge.define("CameraFollower", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                instance: null
            }
        },
        fields: {
            positionOffset: null,
            inRoomPositionOffset: null,
            followSpeed: 0,
            character: null,
            initialRotation: null,
            currentPosition: null,
            currentRotation: null,
            cameraRoutine: null,
            duration: 0,
            canFollowCam: false,
            cameraVelocity: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "CameraFollower#init", this ); }

                this.positionOffset = new UnityEngine.Vector3();
                this.inRoomPositionOffset = new UnityEngine.Vector3();
                this.initialRotation = new UnityEngine.Quaternion();
                this.currentPosition = new UnityEngine.Vector3();
                this.currentRotation = new UnityEngine.Quaternion();
                this.cameraVelocity = new UnityEngine.Vector3();
                this.duration = 0.5;
                this.canFollowCam = true;
                this.cameraVelocity = pc.Vec3.ZERO.clone();
            }
        },
        methods: {
            /*CameraFollower.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "CameraFollower#Awake", this ); }

                if (UnityEngine.MonoBehaviour.op_Equality(CameraFollower.instance, null)) {
                    CameraFollower.instance = this;
                }
                this.initialRotation = this.transform.rotation.$clone();
                //positionOffset=character.position-transform.position;
            },
            /*CameraFollower.Awake end.*/

            /*CameraFollower.LateUpdate start.*/
            LateUpdate: function () {
if ( TRACE ) { TRACE( "CameraFollower#LateUpdate", this ); }

                if (this.canFollowCam && UnityEngine.Component.op_Inequality(this.character, null)) {
                    this.transform.position = this.character.position.$clone().add( this.positionOffset );
                }
            },
            /*CameraFollower.LateUpdate end.*/

            /*CameraFollower.EnableFollowCam start.*/
            EnableFollowCam: function (_enable) {
if ( TRACE ) { TRACE( "CameraFollower#EnableFollowCam", this ); }

                this.canFollowCam = _enable;
            },
            /*CameraFollower.EnableFollowCam end.*/

            /*CameraFollower.GetCamPosition start.*/
            GetCamPosition: function () {
if ( TRACE ) { TRACE( "CameraFollower#GetCamPosition", this ); }

                return new (System.ValueTuple$2(UnityEngine.Vector3,UnityEngine.Quaternion)).$ctor1(this.character.position.$clone().add( this.positionOffset ), this.initialRotation.$clone());
            },
            /*CameraFollower.GetCamPosition end.*/

            /*CameraFollower.MoveCamera start.*/
            MoveCamera: function (target) {
if ( TRACE ) { TRACE( "CameraFollower#MoveCamera", this ); }

                if (this.cameraRoutine == null) {
                    this.cameraRoutine = this.StartCoroutine$1(this.MoveCameraRoutine(target));
                }
            },
            /*CameraFollower.MoveCamera end.*/

            /*CameraFollower.MoveCameraRoutine start.*/
            MoveCameraRoutine: function (target) {
if ( TRACE ) { TRACE( "CameraFollower#MoveCameraRoutine", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    startPos,
                    startRot,
                    elapsed,
                    t,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    startPos = this.transform.position.$clone();
                                        startRot = this.transform.rotation.$clone();
                                        this.currentPosition = startPos.$clone();
                                        this.currentRotation = startRot.$clone();
                                        this.canFollowCam = false;
                                        elapsed = 0.0;
                                    $step = 1;
                                    continue;
                                }
                                case 1: {
                                    if ( elapsed < this.duration ) {
                                            $step = 2;
                                            continue;
                                        } 
                                        $step = 4;
                                        continue;
                                }
                                case 2: {
                                    elapsed += UnityEngine.Time.deltaTime;

                                        t = Math.max(0, Math.min(1, elapsed / this.duration));

                                        // Ease In-Out
                                        t = pc.math.smoothstep(0.0, 1.0, t);

                                        this.transform.position = new pc.Vec3().lerp( startPos, target.position, t );
                                        this.transform.rotation = new pc.Quat().slerpUnclamped( startRot, target.rotation, pc.math.clamp( t, 0, 1 ) );

                                        $enumerator.current = null;
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    
                                        $step = 1;
                                        continue;
                                }
                                case 4: {
                                    this.transform.position = target.position.$clone();
                                        this.transform.rotation = target.rotation.$clone();

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*CameraFollower.MoveCameraRoutine end.*/

            /*CameraFollower.RoomViewCam start.*/
            RoomViewCam: function (target) {
if ( TRACE ) { TRACE( "CameraFollower#RoomViewCam", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    startPos,
                    startRot,
                    elapsed,
                    t,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    startPos = this.transform.position.$clone();
                                        startRot = this.transform.rotation.$clone();
                                        this.currentPosition = startPos.$clone();
                                        this.currentRotation = startRot.$clone();
                                        this.canFollowCam = false;
                                        elapsed = 0.0;
                                    $step = 1;
                                    continue;
                                }
                                case 1: {
                                    if ( elapsed < this.duration ) {
                                            $step = 2;
                                            continue;
                                        } 
                                        $step = 4;
                                        continue;
                                }
                                case 2: {
                                    elapsed += UnityEngine.Time.deltaTime;

                                        t = Math.max(0, Math.min(1, elapsed / this.duration));

                                        // Ease In-Out
                                        t = pc.math.smoothstep(0.0, 1.0, t);

                                        this.transform.position = new pc.Vec3().lerp( startPos, target.position, t );
                                        this.transform.rotation = new pc.Quat().slerpUnclamped( startRot, target.rotation, pc.math.clamp( t, 0, 1 ) );

                                        $enumerator.current = null;
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    
                                        $step = 1;
                                        continue;
                                }
                                case 4: {
                                    this.transform.position = target.position.$clone();
                                        this.transform.rotation = target.rotation.$clone();
                                        $enumerator.current = new UnityEngine.WaitForSeconds(0.5);
                                        $step = 5;
                                        return true;
                                }
                                case 5: {
                                    // ResetCamera();
                                        this.transform.position = this.currentPosition.$clone();
                                        this.transform.rotation = this.currentRotation.$clone();
                                        this.canFollowCam = true;

                                        UIManager.instance.EnablePlayerControls(true);
                                        CharacterMovement.instance.EnableMovement(true);
                                        this.positionOffset = this.inRoomPositionOffset.$clone();

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*CameraFollower.RoomViewCam end.*/

            /*CameraFollower.ResetCamera start.*/
            ResetCamera: function () {
if ( TRACE ) { TRACE( "CameraFollower#ResetCamera", this ); }

                if (this.cameraRoutine != null) {
                    this.StopCoroutine$2(this.cameraRoutine);
                    this.cameraRoutine = null;
                }
                this.transform.position = this.currentPosition.$clone();
                this.transform.rotation = this.currentRotation.$clone();
                this.canFollowCam = true;
            },
            /*CameraFollower.ResetCamera end.*/


        }
    });
    /*CameraFollower end.*/

    /*CharacterMovement start.*/
    Bridge.define("CharacterMovement", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                MoveHash: 0,
                instance: null
            },
            ctors: {
                init: function () {
if ( TRACE ) { TRACE( "CharacterMovement#init", this ); }

                    this.MoveHash = UnityEngine.Animator.StringToHash("move");
                }
            }
        },
        fields: {
            joystick: null,
            playerCamera: null,
            targetMarker: null,
            playerAnimator: null,
            moveSpeed: 0,
            rotationSpeed: 0,
            camSwitchingTime: 0,
            canMove: false,
            displayMarker: false,
            markerTarget: null,
            rb: null,
            _currentMoveState: 0,
            _moveDirection: null,
            isRepositioning: false
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "CharacterMovement#init", this ); }

                this._moveDirection = new UnityEngine.Vector3();
                this.camSwitchingTime = 0.5;
                this._currentMoveState = -1;
                this.isRepositioning = false;
            }
        },
        methods: {
            /*CharacterMovement.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "CharacterMovement#Awake", this ); }

                CharacterMovement.instance = this;
                // Initialize();
            },
            /*CharacterMovement.Awake end.*/

            /*CharacterMovement.Initialize start.*/
            Initialize: function () {
if ( TRACE ) { TRACE( "CharacterMovement#Initialize", this ); }

                // rb = GetComponent<Rigidbody>();
                this.EnableCameraFollow(true);
                this.EnableMovement(true);
                this.targetMarker.SetActive(false);

            },
            /*CharacterMovement.Initialize end.*/

            /*CharacterMovement.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "CharacterMovement#Update", this ); }

                if (this.canMove) {
                    this.ProcessInputAndAnimation();
                } else {
                    this._moveDirection = pc.Vec3.ZERO.clone(); // Stop moving if canMove is false
                }

                if (this.displayMarker && UnityEngine.Component.op_Inequality(this.markerTarget, null)) {
                    this.targetMarker.transform.LookAt(this.markerTarget);
                    var _angle = this.targetMarker.transform.eulerAngles.$clone();
                    _angle.x = 0.0;
                    _angle.z = 0.0;
                    this.targetMarker.transform.eulerAngles = _angle.$clone();
                }
            },
            /*CharacterMovement.Update end.*/

            /*CharacterMovement.FixedUpdate start.*/
            FixedUpdate: function () {
if ( TRACE ) { TRACE( "CharacterMovement#FixedUpdate", this ); }

                if (this.canMove && this._moveDirection.lengthSq() > 0.01) {
                    // MovePosition prevents walking through walls
                    this.rb.MovePosition(this.rb.position.$clone().add( this._moveDirection.$clone().clone().scale( this.moveSpeed ).clone().scale( UnityEngine.Time.fixedDeltaTime ) ));
                }
            },
            /*CharacterMovement.FixedUpdate end.*/

            /*CharacterMovement.ProcessInputAndAnimation start.*/
            ProcessInputAndAnimation: function () {
if ( TRACE ) { TRACE( "CharacterMovement#ProcessInputAndAnimation", this ); }

                var horizontalInput = 1.0 * this.joystick.Horizontal;
                var verticalInput = 1.0 * this.joystick.Vertical;

                this._moveDirection = new pc.Vec3( horizontalInput, 0.0, verticalInput ).clone().normalize().$clone();

                // 1. Check Idle / Deadzone State
                if (this._moveDirection.lengthSq() <= 0.01) {
                    if (UnityEngine.Component.op_Inequality(this.playerAnimator, null) && this._currentMoveState !== 0) {
                        this.playerAnimator.SetInteger(CharacterMovement.MoveHash, 0);
                        this._currentMoveState = 0;
                    }
                    return;
                }

                // 2. Set Run Animation State
                if (UnityEngine.Component.op_Inequality(this.playerAnimator, null) && this._currentMoveState !== 1) {
                    this.playerAnimator.SetInteger(CharacterMovement.MoveHash, 1);
                    this._currentMoveState = 1;
                }

                // 3. Smooth Rotation
                var targetDirection = pc.Vec3.rotateTowards( this.transform.forward, this._moveDirection, this.rotationSpeed * UnityEngine.Time.deltaTime, 0.0 );
                this.transform.rotation = new pc.Quat().lookRotation( targetDirection, pc.Vec3.UP );
            },
            /*CharacterMovement.ProcessInputAndAnimation end.*/

            /*CharacterMovement.EnableMovement start.*/
            EnableMovement: function (_enable) {
if ( TRACE ) { TRACE( "CharacterMovement#EnableMovement", this ); }

                this.canMove = _enable;
                // controller.enabled=_enable;
                if (!_enable) {
                    this.joystick.SimulatePointerUp();
                    this.playerAnimator.SetInteger$1("move", 0);
                }
            },
            /*CharacterMovement.EnableMovement end.*/

            /*CharacterMovement.UpdatePlayerPosition start.*/
            UpdatePlayerPosition: function (_target) {
if ( TRACE ) { TRACE( "CharacterMovement#UpdatePlayerPosition", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    if (this.isRepositioning) {
                                            $step = 1;
                                            continue;
                                        } 
                                        $step = 2;
                                        continue;
                                }
                                case 1: {
                                    return false;
                                }
                                case 2: {
                                    this.isRepositioning = true;
                                        this.EnableMovement(false);
                                        $enumerator.current = null;
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    this.transform.position = _target.position.$clone();
                                        this.transform.rotation = _target.rotation.$clone();
                                        $enumerator.current = null;
                                        $step = 4;
                                        return true;
                                }
                                case 4: {
                                    this.isRepositioning = false;
                                        this.EnableMovement(true);

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*CharacterMovement.UpdatePlayerPosition end.*/

            /*CharacterMovement.PlayAnimation start.*/
            PlayAnimation: function (_animName) {
if ( TRACE ) { TRACE( "CharacterMovement#PlayAnimation", this ); }

                this.playerAnimator.Play$2(_animName);
            },
            /*CharacterMovement.PlayAnimation end.*/

            /*CharacterMovement.EnablePlayerCamera start.*/
            EnablePlayerCamera: function (_enable) {
if ( TRACE ) { TRACE( "CharacterMovement#EnablePlayerCamera", this ); }

                this.playerCamera.gameObject.SetActive(_enable);
            },
            /*CharacterMovement.EnablePlayerCamera end.*/

            /*CharacterMovement.EnableCameraFollow start.*/
            EnableCameraFollow: function (_enable) {
if ( TRACE ) { TRACE( "CharacterMovement#EnableCameraFollow", this ); }

                this.playerCamera.EnableFollowCam(_enable);
            },
            /*CharacterMovement.EnableCameraFollow end.*/

            /*CharacterMovement.DisplayTargetMarker start.*/
            DisplayTargetMarker: function (_target) {
if ( TRACE ) { TRACE( "CharacterMovement#DisplayTargetMarker", this ); }

                this.markerTarget = _target;
                this.displayMarker = true;
                this.targetMarker.SetActive(true);
                // StartCoroutine(AnimateCircle(_targetCircle));

            },
            /*CharacterMovement.DisplayTargetMarker end.*/

            /*CharacterMovement.AnimateCircle start.*/
            AnimateCircle: function (_targetCircle) {
if ( TRACE ) { TRACE( "CharacterMovement#AnimateCircle", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    t,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    if ( true ) {
                                            $step = 1;
                                            continue;
                                        } 
                                        $step = 3;
                                        continue;
                                }
                                case 1: {
                                    t = (Math.sin(UnityEngine.Time.time * 10) + 1.0) * 0.5;

                                        _targetCircle.localScale = new pc.Vec3().lerp( new pc.Vec3( 1, 1, 1 ), new pc.Vec3( 1, 1, 1 ).clone().scale( (1.2) ), t );

                                        $enumerator.current = null;
                                        $step = 2;
                                        return true;
                                }
                                case 2: {
                                    
                                        $step = 0;
                                        continue;
                                }
                                case 3: {

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*CharacterMovement.AnimateCircle end.*/

            /*CharacterMovement.HideMarker start.*/
            HideMarker: function () {
if ( TRACE ) { TRACE( "CharacterMovement#HideMarker", this ); }

                this.targetMarker.SetActive(false);

            },
            /*CharacterMovement.HideMarker end.*/


        }
    });
    /*CharacterMovement end.*/

    /*Door start.*/
    Bridge.define("Door", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            door_Cam: null
        },
        methods: {
            /*Door.OnTriggerEnter start.*/
            OnTriggerEnter: function (other) {
if ( TRACE ) { TRACE( "Door#OnTriggerEnter", this ); }

                AudioManager.instance.PlayCheckPointSound();
                this.GetComponent(UnityEngine.Collider).enabled = false;
                CharacterMovement.instance.HideMarker();
                CharacterMovement.instance.EnableMovement(false);
                UIManager.instance.EnablePlayerControls(false);
                this.StartCoroutine$1(CameraFollower.instance.RoomViewCam(this.door_Cam));
            },
            /*Door.OnTriggerEnter end.*/


        }
    });
    /*Door end.*/

    /*GameController start.*/
    Bridge.define("GameController", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                instance: null
            }
        },
        fields: {
            confettiCamera: null,
            confettiParticles: null,
            TargetPoins: null,
            shelfs: null,
            currentTargetIndex: 0,
            totalPlacedBooks: 0
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "GameController#init", this ); }

                this.currentTargetIndex = 0;
                this.totalPlacedBooks = 0;
            }
        },
        methods: {
            /*GameController.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "GameController#Awake", this ); }

                if (UnityEngine.MonoBehaviour.op_Equality(GameController.instance, null)) {
                    GameController.instance = this;
                } else {
                    UnityEngine.MonoBehaviour.Destroy(this.gameObject);
                }
            },
            /*GameController.Awake end.*/

            /*GameController.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "GameController#Start", this ); }

                this.InitializeGame();
                CharacterMovement.instance.DisplayTargetMarker(this.TargetPoins[0].transform);
                this.currentTargetIndex = (this.currentTargetIndex + 1) | 0;
                UIManager.instance.DisplayInstruction(true, "Collect Books");
            },
            /*GameController.Start end.*/

            /*GameController.InitializeGame start.*/
            InitializeGame: function () {
if ( TRACE ) { TRACE( "GameController#InitializeGame", this ); }

                CharacterMovement.instance.Initialize();
            },
            /*GameController.InitializeGame end.*/

            /*GameController.PlayConfetti start.*/
            PlayConfetti: function () {
if ( TRACE ) { TRACE( "GameController#PlayConfetti", this ); }

                // confettiCamera.SetParent(Player.Instance.headPoint);
                // confettiCamera.localPosition = Vector3.zero;
                // confettiCamera.localRotation = Quaternion.identity;
                this.confettiParticles.gameObject.SetActive(true);
                for (var i = 0; i < this.confettiParticles.childCount; i = (i + 1) | 0) {
                    this.confettiParticles.GetChild(i).GetComponent(UnityEngine.ParticleSystem).Play();
                }
            },
            /*GameController.PlayConfetti end.*/

            /*GameController.NextTargetMarker start.*/
            NextTargetMarker: function () {
if ( TRACE ) { TRACE( "GameController#NextTargetMarker", this ); }

                UnityEngine.Debug.Log$1("current target indx " + this.currentTargetIndex);
                UnityEngine.Debug.Log$1(this.TargetPoins[this.currentTargetIndex].name);
                CharacterMovement.instance.DisplayTargetMarker(this.TargetPoins[this.currentTargetIndex].transform);
                this.currentTargetIndex = (this.currentTargetIndex + 1) | 0;
            },
            /*GameController.NextTargetMarker end.*/

            /*GameController.OnEndGame start.*/
            OnEndGame: function () {
if ( TRACE ) { TRACE( "GameController#OnEndGame", this ); }

                this.PlayConfetti();
                AudioManager.instance.PlayLvlCmpltSnd();
                this.StartCoroutine$1(UIManager.instance.EndGame());
            },
            /*GameController.OnEndGame end.*/

            /*GameController.NextTargetShelf start.*/
            NextTargetShelf: function () {
if ( TRACE ) { TRACE( "GameController#NextTargetShelf", this ); }

                UnityEngine.Debug.Log$1("current target indx in nextTargetShuffle()  " + this.currentTargetIndex);
                this.TargetPoins[this.currentTargetIndex].SetActive(true);
                this.NextTargetMarker();
                UIManager.instance.DisplayInstruction(true, "PLace Books in shelf");

            },
            /*GameController.NextTargetShelf end.*/

            /*GameController.NextBooksTarget start.*/
            NextBooksTarget: function () {
if ( TRACE ) { TRACE( "GameController#NextBooksTarget", this ); }

                UnityEngine.Debug.Log$1("current target indx in nextBooksTarget()  " + this.currentTargetIndex);
                this.TargetPoins[this.currentTargetIndex].SetActive(true);
                this.NextTargetMarker();
                UIManager.instance.DisplayInstruction(true, "Collect Books");
            },
            /*GameController.NextBooksTarget end.*/


        }
    });
    /*GameController end.*/

    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty start.*/
    Bridge.define("IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty", {
        inherits: [UnityEngine.MonoBehaviour]
    });
    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty end.*/

    /*Movement start.*/
    Bridge.define("Movement", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                instance: null
            }
        },
        fields: {
            joystick: null,
            velocity: null,
            moveSpeed: 0,
            rotationSpeed: 0,
            canMove: false
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "Movement#init", this ); }

                this.velocity = new UnityEngine.Vector3();
            }
        },
        methods: {
            /*Movement.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "Movement#Awake", this ); }

                Movement.instance = this;
                this.Initialize();
            },
            /*Movement.Awake end.*/

            /*Movement.Initialize start.*/
            Initialize: function () {
if ( TRACE ) { TRACE( "Movement#Initialize", this ); }

                this.EnableMovement(true);
            },
            /*Movement.Initialize end.*/

            /*Movement.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "Movement#Update", this ); }

                if (this.canMove) {
                    this.Move();
                }

            },
            /*Movement.Update end.*/

            /*Movement.Move start.*/
            Move: function () {
if ( TRACE ) { TRACE( "Movement#Move", this ); }

                var horizontalInput = -1.0 * this.joystick.Horizontal;
                var verticalInput = -1.0 * this.joystick.Vertical;

                var moveDirection = new pc.Vec3( horizontalInput, 0.0, verticalInput ).clone().normalize().$clone();
                var _targetPosition = this.transform.position.$clone().add( (moveDirection) );
                this.transform.position = new pc.Vec3().lerp( this.transform.position, _targetPosition, this.moveSpeed * UnityEngine.Time.deltaTime );
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
            },
            /*Movement.Move end.*/

            /*Movement.EnableMovement start.*/
            EnableMovement: function (_enable) {
if ( TRACE ) { TRACE( "Movement#EnableMovement", this ); }

                this.canMove = _enable;
            },
            /*Movement.EnableMovement end.*/


        }
    });
    /*Movement end.*/

    /*PlayableDynamicJoystick start.*/
    Bridge.define("PlayableDynamicJoystick", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            deadZone: 0,
            handleRange: 0,
            uiCamera: null,
            background: null,
            joystickHandle: null,
            axisOptions: 0,
            maxRadius: 0,
            startPos: null,
            input: null,
            fixedPosition: null,
            cam: null,
            baseRect: null,
            canvas: null,
            targetAlphaUP: 0,
            targetAlphaDown: 0,
            isPointerDown: false
        },
        props: {
            Horizontal: {
                get: function () {
if ( TRACE ) { TRACE( "PlayableDynamicJoystick#Horizontal#get", this ); }

                    return -this.input.x;
                }
            },
            Vertical: {
                get: function () {
if ( TRACE ) { TRACE( "PlayableDynamicJoystick#Vertical#get", this ); }

                    return -this.input.y;
                }
            },
            Direction: {
                get: function () {
if ( TRACE ) { TRACE( "PlayableDynamicJoystick#Direction#get", this ); }

                    return new pc.Vec2( this.Horizontal, this.Vertical );
                }
            }
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "PlayableDynamicJoystick#init", this ); }

                this.startPos = new UnityEngine.Vector2();
                this.input = new UnityEngine.Vector2();
                this.fixedPosition = new UnityEngine.Vector2();
                this.deadZone = 0.0;
                this.handleRange = 1.0;
                this.maxRadius = 10;
                this.targetAlphaUP = 0.5;
                this.targetAlphaDown = 1.0;
                this.isPointerDown = false;
            }
        },
        methods: {
            /*PlayableDynamicJoystick.SimulatePointerUp start.*/
            SimulatePointerUp: function () {
if ( TRACE ) { TRACE( "PlayableDynamicJoystick#SimulatePointerUp", this ); }

                this.OnMouseUp(UnityEngine.Vector2.FromVector3(UnityEngine.Input.mousePosition));
            },
            /*PlayableDynamicJoystick.SimulatePointerUp end.*/

            /*PlayableDynamicJoystick.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "PlayableDynamicJoystick#Start", this ); }

                this.baseRect = this.GetComponent(UnityEngine.RectTransform);
                this.canvas = this.GetComponentInParent(UnityEngine.Canvas);
                if (UnityEngine.Component.op_Equality(this.canvas, null)) {
                    UnityEngine.Debug.LogError$2("The Joystick is not placed inside a canvas");
                }
                var center = new pc.Vec2( 0.5, 0.5 );
                this.background.pivot = center.$clone();
                this.joystickHandle.anchorMin = center.$clone();
                this.joystickHandle.anchorMax = center.$clone();
                this.joystickHandle.pivot = center.$clone();
                this.joystickHandle.anchoredPosition = pc.Vec2.ZERO.clone();
                if (this.canvas.renderMode === UnityEngine.RenderMode.ScreenSpaceCamera) {
                    this.cam = this.canvas.worldCamera;

                }

                var currentColor = this.background.gameObject.GetComponent(UnityEngine.UI.Image).color.$clone();
                currentColor.a = Math.max(0, Math.min(1, this.targetAlphaUP));
                this.background.gameObject.GetComponent(UnityEngine.UI.Image).color = currentColor.$clone();
                this.background.transform.GetChild(0).gameObject.GetComponent(UnityEngine.UI.Image).color = currentColor.$clone();
                this.fixedPosition = this.background.anchoredPosition.$clone();
            },
            /*PlayableDynamicJoystick.Start end.*/

            /*PlayableDynamicJoystick.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "PlayableDynamicJoystick#Update", this ); }

                if (!this.isPointerDown) {
                    if (this.IsPointerOverUI()) {
                        return;
                    }
                }
                if (UnityEngine.Input.GetMouseButtonDown(0)) {
                    this.OnMouseDown(UnityEngine.Vector2.FromVector3(UnityEngine.Input.mousePosition));
                }

                if (UnityEngine.Input.GetMouseButton(0) && this.isPointerDown) {
                    this.OnDrag(UnityEngine.Vector2.FromVector3(UnityEngine.Input.mousePosition));
                }

                if (UnityEngine.Input.GetMouseButtonUp(0)) {
                    this.OnMouseUp(UnityEngine.Vector2.FromVector3(UnityEngine.Input.mousePosition));
                }
            },
            /*PlayableDynamicJoystick.Update end.*/

            /*PlayableDynamicJoystick.IsPointerOverUI start.*/
            IsPointerOverUI: function () {
if ( TRACE ) { TRACE( "PlayableDynamicJoystick#IsPointerOverUI", this ); }

                if (UnityEngine.MonoBehaviour.op_Equality(UnityEngine.EventSystems.EventSystem.current, null)) {
                    return false;
                }

                var pointerData = new UnityEngine.EventSystems.PointerEventData(UnityEngine.EventSystems.EventSystem.current);
                pointerData.position = UnityEngine.Vector2.FromVector3(UnityEngine.Input.mousePosition.$clone());
                var results = new (System.Collections.Generic.List$1(UnityEngine.EventSystems.RaycastResult)).ctor();
                UnityEngine.EventSystems.EventSystem.current.RaycastAll(pointerData, results);

                return results.Count > 0;
            },
            /*PlayableDynamicJoystick.IsPointerOverUI end.*/

            /*PlayableDynamicJoystick.OnDrag start.*/
            OnDrag: function (_mousePosition) {
if ( TRACE ) { TRACE( "PlayableDynamicJoystick#OnDrag", this ); }

                var position = UnityEngine.RectTransformUtility.WorldToScreenPoint(this.cam, this.background.position);
                var radius = this.background.sizeDelta.$clone().scale( 1.0 / ( 2 ) );
                this.input = (_mousePosition.$clone().sub( position )).div( (radius.$clone().scale( this.canvas.scaleFactor )) );
                this.FormatInput();
                this.HandleInput(this.input.length(), this.input.clone().normalize(), radius, this.cam);
                this.joystickHandle.anchoredPosition = this.input.$clone().mul( radius ).scale( this.handleRange );
            },
            /*PlayableDynamicJoystick.OnDrag end.*/

            /*PlayableDynamicJoystick.OnMouseDown start.*/
            OnMouseDown: function (_mousePosition) {
if ( TRACE ) { TRACE( "PlayableDynamicJoystick#OnMouseDown", this ); }

                this.isPointerDown = true;
                this.input = pc.Vec2.ZERO.clone();
                this.UpdateBackGround(_mousePosition, this.targetAlphaDown);
                this.OnDrag(_mousePosition);
            },
            /*PlayableDynamicJoystick.OnMouseDown end.*/

            /*PlayableDynamicJoystick.OnMouseUp start.*/
            OnMouseUp: function (_mousePosition) {
if ( TRACE ) { TRACE( "PlayableDynamicJoystick#OnMouseUp", this ); }

                this.isPointerDown = false;
                this.UpdateBackGround(_mousePosition, this.targetAlphaUP);
                this.background.anchoredPosition = this.fixedPosition.$clone();
                this.input = pc.Vec2.ZERO.clone();
                this.joystickHandle.anchoredPosition = pc.Vec2.ZERO.clone();
            },
            /*PlayableDynamicJoystick.OnMouseUp end.*/

            /*PlayableDynamicJoystick.UpdateBackGround start.*/
            UpdateBackGround: function (_mousePosition, _alphaVal) {
if ( TRACE ) { TRACE( "PlayableDynamicJoystick#UpdateBackGround", this ); }

                this.background.anchoredPosition = this.ScreenPointToAnchoredPosition(_mousePosition);
                var currentColor = this.background.gameObject.GetComponent(UnityEngine.UI.Image).color.$clone();
                currentColor.a = Math.max(0, Math.min(1, _alphaVal));
                this.background.gameObject.GetComponent(UnityEngine.UI.Image).color = currentColor.$clone();
                this.background.transform.GetChild(0).gameObject.GetComponent(UnityEngine.UI.Image).color = currentColor.$clone();
            },
            /*PlayableDynamicJoystick.UpdateBackGround end.*/

            /*PlayableDynamicJoystick.SetBackGroundPostion start.*/
            SetBackGroundPostion: function () {
if ( TRACE ) { TRACE( "PlayableDynamicJoystick#SetBackGroundPostion", this ); }

                // uiCamera.screen
            },
            /*PlayableDynamicJoystick.SetBackGroundPostion end.*/

            /*PlayableDynamicJoystick.ScreenPointToAnchoredPosition start.*/
            ScreenPointToAnchoredPosition: function (screenPosition) {
if ( TRACE ) { TRACE( "PlayableDynamicJoystick#ScreenPointToAnchoredPosition", this ); }

                var localPoint = { v : pc.Vec2.ZERO.clone() };

                if (UnityEngine.RectTransformUtility.ScreenPointToLocalPointInRectangle(this.baseRect, screenPosition, this.cam, localPoint)) {
                    var pivotOffset = this.baseRect.pivot.$clone().mul( this.baseRect.sizeDelta );
                    var _debug = localPoint.v.$clone().sub( (this.background.anchorMax.$clone().mul( this.baseRect.sizeDelta )) ).add( pivotOffset );

                    return localPoint.v.$clone().sub( (this.background.anchorMax.$clone().mul( this.baseRect.sizeDelta )) ).add( pivotOffset );
                }
                return pc.Vec2.ZERO.clone();
            },
            /*PlayableDynamicJoystick.ScreenPointToAnchoredPosition end.*/

            /*PlayableDynamicJoystick.HandleInput start.*/
            HandleInput: function (magnitude, normalised, radius, cam) {
if ( TRACE ) { TRACE( "PlayableDynamicJoystick#HandleInput", this ); }

                if (magnitude > this.deadZone) {
                    if (magnitude > 1) {
                        this.input = normalised.$clone();
                    }
                } else {
                    this.input = pc.Vec2.ZERO.clone();
                }
            },
            /*PlayableDynamicJoystick.HandleInput end.*/

            /*PlayableDynamicJoystick.FormatInput start.*/
            FormatInput: function () {
if ( TRACE ) { TRACE( "PlayableDynamicJoystick#FormatInput", this ); }

                if (this.axisOptions === PlayableDynamicJoystick.AxisOptions.Horizontal) {
                    this.input = new pc.Vec2( this.input.x, 0.0 );
                } else {
                    if (this.axisOptions === PlayableDynamicJoystick.AxisOptions.Vertical) {
                        this.input = new pc.Vec2( 0.0, this.input.y );
                    }
                }
            },
            /*PlayableDynamicJoystick.FormatInput end.*/


        }
    });
    /*PlayableDynamicJoystick end.*/

    /*PlayableDynamicJoystick+AxisOptions start.*/
    Bridge.define("PlayableDynamicJoystick.AxisOptions", {
        $kind: 1006,
        statics: {
            fields: {
                Both: 0,
                Horizontal: 1,
                Vertical: 2
            }
        }
    });
    /*PlayableDynamicJoystick+AxisOptions end.*/

    /*Player start.*/
    Bridge.define("Player", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                Instance: null
            }
        },
        fields: {
            headPoint: null,
            playerCatchPoints: null,
            catchDuration: 0,
            moveBookDuration: 0,
            currentPickedBooks: 0,
            halfDuration: 0
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "Player#init", this ); }

                this.catchDuration = 0.1;
                this.moveBookDuration = 1;
                this.currentPickedBooks = 0;
            }
        },
        methods: {
            /*Player.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "Player#Awake", this ); }

                if (UnityEngine.MonoBehaviour.op_Equality(Player.Instance, null)) {
                    Player.Instance = this;
                }
                this.halfDuration = this.catchDuration / 2;
            },
            /*Player.Awake end.*/

            /*Player.CatchBook start.*/
            CatchBook: function (book) {
if ( TRACE ) { TRACE( "Player#CatchBook", this ); }

                // if(!isFirstBookCatched)
                // {
                //     GameController.instance.StartAnimCircles();
                //     isFirstBookCatched = true;
                // }
                if (((this.currentPickedBooks + 1) | 0) === 1) {
                    CharacterMovement.instance.HideMarker();
                }
                if (((this.currentPickedBooks + 1) | 0) >= 10) {
                    GameController.instance.NextTargetShelf();
                }
                var point = this.GetFreeCatchPoint();
                if (point != null) {
                    AudioManager.instance.PlayPickBookSound();
                    CharacterMovement.instance.PlayAnimation("HoldBucket");
                    this.currentPickedBooks = (this.currentPickedBooks + 1) | 0;
                    this.StartCoroutine$1(this.CatchBookRoutine(point, book));
                    return true;
                }
                return false;
            },
            /*Player.CatchBook end.*/

            /*Player.CatchBookRoutine start.*/
            CatchBookRoutine: function (point, book) {
if ( TRACE ) { TRACE( "Player#CatchBookRoutine", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    start,
                    end,
                    middle,
                    forward,
                    startRotation,
                    endRotation,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    start = book.position.$clone();
                                        end = point.catchPoint.position.$clone();

                                        middle = new pc.Vec3().lerp( start, end, 0.5 );

                                        // How far the book goes forward
                                        forward = this.transform.forward.$clone().clone().scale( 1.0 );

                                        // High point
                                        middle = middle.$clone().add( forward.$clone() );
                                        middle = middle.$clone().add( pc.Vec3.UP.clone().clone().scale( 1.5 ) );

                                        startRotation = book.rotation.$clone();
                                        endRotation = point.catchPoint.rotation.$clone();

                                        // First half: book -> middle
                                        $enumerator.current = this.MoveBezier(book, start, new pc.Vec3().lerp( start, middle, 0.5 ).add( pc.Vec3.UP.clone().clone().scale( 0.5 ) ), middle, startRotation, new pc.Quat().slerpUnclamped( startRotation, endRotation, pc.math.clamp( 0.5, 0, 1 ) ), this.halfDuration);
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    // Second half: middle -> hand
                                        $enumerator.current = this.MoveBezier(book, middle, new pc.Vec3().lerp( middle, end, 0.5 ).add( pc.Vec3.UP.clone().clone().scale( 0.5 ) ), end, new pc.Quat().slerpUnclamped( startRotation, endRotation, pc.math.clamp( 0.5, 0, 1 ) ), endRotation, this.halfDuration);
                                        $step = 2;
                                        return true;
                                }
                                case 2: {
                                    book.position = end.$clone();
                                        book.rotation = endRotation.$clone();
                                        book.SetParent(point.catchPoint);
                                        book.localPosition = pc.Vec3.ZERO.clone();
                                        book.localRotation = pc.Quat.IDENTITY.clone();

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*Player.CatchBookRoutine end.*/

            /*Player.MoveBezier start.*/
            MoveBezier: function (book, start, control, end, startRotation, endRotation, duration) {
if ( TRACE ) { TRACE( "Player#MoveBezier", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    elapsed,
                    t,
                    position,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    elapsed = 0.0;
                                    $step = 1;
                                    continue;
                                }
                                case 1: {
                                    if ( elapsed < duration ) {
                                            $step = 2;
                                            continue;
                                        } 
                                        $step = 4;
                                        continue;
                                }
                                case 2: {
                                    elapsed += UnityEngine.Time.deltaTime;

                                        t = Math.max(0, Math.min(1, elapsed / duration));

                                        // Position
                                        position = start.clone().scale( (1 - t) * (1 - t) ).add( control.clone().scale( 2 * (1 - t) * t ) ).add( end.clone().scale( t * t ) );

                                        book.position = position.$clone();

                                        // Rotation
                                        book.rotation = new pc.Quat().slerpUnclamped( startRotation, endRotation, pc.math.clamp( t, 0, 1 ) );

                                        $enumerator.current = null;
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    
                                        $step = 1;
                                        continue;
                                }
                                case 4: {
                                    book.position = end.$clone();
                                        book.rotation = endRotation.$clone();

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*Player.MoveBezier end.*/

            /*Player.GetFreeCatchPoint start.*/
            GetFreeCatchPoint: function () {
if ( TRACE ) { TRACE( "Player#GetFreeCatchPoint", this ); }

                for (var i = 0; i < this.playerCatchPoints.length; i = (i + 1) | 0) {
                    if (!this.playerCatchPoints[i].isOccupied) {
                        this.playerCatchPoints[i].isOccupied = true;
                        return this.playerCatchPoints[i];
                    }
                }
                return null;
            },
            /*Player.GetFreeCatchPoint end.*/

            /*Player.PlaceBooksOnShelf start.*/
            PlaceBooksOnShelf: function (shelfPoints, shelf) {
if ( TRACE ) { TRACE( "Player#PlaceBooksOnShelf", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    isAnyBookPlaced,
                    i,
                    $t,
                    shelfPoint,
                    book,
                    $t1,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    // Debug.Log("placebook called");
                                        CameraFollower.instance.MoveCamera(shelf.shelf_Cam);
                                        isAnyBookPlaced = false;
                                        $enumerator.current = new UnityEngine.WaitForSeconds(0.5);
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    i = (this.playerCatchPoints.length - 1) | 0;
                                        $step = 2;
                                        continue;
                                }
                                case 2: {
                                    if ( i >= 0 ) {
                                            $step = 3;
                                            continue;
                                        }
                                    $step = 13;
                                    continue;
                                }
                                case 3: {
                                    if (this.playerCatchPoints[i].isOccupied) {
                                            $step = 4;
                                            continue;
                                        } 
                                        $step = 11;
                                        continue;
                                }
                                case 4: {
                                    // Debug.Log("playerPoint");
                                        $t = Bridge.getEnumerator(shelfPoints);
                                        $step = 5;
                                        continue;
                                }
                                case 5: {
                                    if ($t.moveNext()) {
                                            shelfPoint = $t.Current;
                                            $step = 6;
                                            continue;
                                        }
                                    $step = 10;
                                    continue;
                                }
                                case 6: {
                                    if (!shelfPoint.isOccupied) {
                                            $step = 7;
                                            continue;
                                        } 
                                        $step = 9;
                                        continue;
                                }
                                case 7: {
                                    book = this.playerCatchPoints[i].catchPoint.GetChild(0);
                                        shelf.placedBooksCount = (shelf.placedBooksCount + 1) | 0;
                                        this.currentPickedBooks = (this.currentPickedBooks - 1) | 0;
                                        ($t1 = GameController.instance).totalPlacedBooks = ($t1.totalPlacedBooks + 1) | 0;
                                        AudioManager.instance.PlayPopBookSound();
                                        this.playerCatchPoints[i].isOccupied = false;
                                        shelfPoint.isOccupied = true;
                                        $enumerator.current = this.StartCoroutine$1(this.MoveBook(book, shelfPoint.point));
                                        $step = 8;
                                        return true;
                                }
                                case 8: {
                                    isAnyBookPlaced = true;
                                        $step = 10;
                                        continue;
                                }
                                case 9: {
                                    $step = 5;
                                    continue;
                                }
                                case 10: {
                                    $step = 11;
                                    continue;
                                }
                                case 11: {
                                    if (shelf.placedBooksCount >= 10) {
                                            this.StopCoroutine(shelf.AnimateCircle());
                                            shelf.circle.gameObject.SetActive(false);
                                            // GameController.instance.NextTargetShelf();
                                            if (GameController.instance.totalPlacedBooks !== 30) {
                                                GameController.instance.NextBooksTarget();
                                            }
                                            // UIManager.instance.DisplayInstruction(true,"Collect Books");
                                            $step = 13;
                                            continue;
                                        }
                                    $step = 12;
                                    continue;
                                }
                                case 12: {
                                    i = (i - 1) | 0;
                                    $step = 2;
                                    continue;
                                }
                                case 13: {
                                    // CharacterMovement.instance.EnableMovement(true);
                                        if (isAnyBookPlaced) {
                                            $step = 14;
                                            continue;
                                        } 
                                        $step = 16;
                                        continue;
                                }
                                case 14: {
                                    $enumerator.current = new UnityEngine.WaitForSeconds(0.7);
                                        $step = 15;
                                        return true;
                                }
                                case 15: {
                                    $step = 16;
                                    continue;
                                }
                                case 16: {
                                    if (!isAnyBookPlaced) {
                                            this.StartCoroutine$1(UIManager.instance.DisplayInfoMsg("No Book to place"));
                                        }
                                        CameraFollower.instance.ResetCamera();
                                        if (GameController.instance.totalPlacedBooks >= 30) {
                                            $step = 17;
                                            continue;
                                        } 
                                        $step = 18;
                                        continue;
                                }
                                case 17: {
                                    CharacterMovement.instance.PlayAnimation("EmptyHand");
                                        UIManager.instance.DisplayInstruction(true, "Completed Successfuly");
                                        GameController.instance.OnEndGame();
                                        return false;
                                    $step = 18;
                                    continue;
                                }
                                case 18: {
                                    if (this.currentPickedBooks <= 0) {
                                            CharacterMovement.instance.PlayAnimation("EmptyHand");
                                        }
                                        UIManager.instance.EnablePlayerControls(true);
                                        UIManager.instance.DisplayInstruction(false);
                                        CharacterMovement.instance.EnableMovement(true);

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*Player.PlaceBooksOnShelf end.*/

            /*Player.MoveBook start.*/
            MoveBook: function (book, shelfPoint) {
if ( TRACE ) { TRACE( "Player#MoveBook", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    elapsed,
                    startPos,
                    endPos,
                    startRot,
                    endRot,
                    t,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    elapsed = 0;
                                        startPos = book.position.$clone();
                                        endPos = shelfPoint.position.$clone();
                                        startRot = book.rotation.$clone();
                                        endRot = shelfPoint.rotation.$clone();
                                    $step = 1;
                                    continue;
                                }
                                case 1: {
                                    if ( elapsed < this.moveBookDuration ) {
                                            $step = 2;
                                            continue;
                                        } 
                                        $step = 4;
                                        continue;
                                }
                                case 2: {
                                    elapsed += UnityEngine.Time.deltaTime;
                                        t = Math.max(0, Math.min(1, elapsed / this.moveBookDuration));
                                        book.position = new pc.Vec3().lerp( startPos, endPos, t );
                                        book.rotation = new pc.Quat().slerpUnclamped( startRot, endRot, pc.math.clamp( t, 0, 1 ) );
                                        $enumerator.current = null;
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    
                                        $step = 1;
                                        continue;
                                }
                                case 4: {
                                    book.position = endPos.$clone();
                                        book.rotation = endRot.$clone();
                                        book.SetParent(shelfPoint);
                                        book.localPosition = pc.Vec3.ZERO.clone();
                                        book.localRotation = pc.Quat.IDENTITY.clone();

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*Player.MoveBook end.*/


        }
    });
    /*Player end.*/

    /*Player+PlayerCatchPoint start.*/
    Bridge.define("Player.PlayerCatchPoint", {
        $kind: 1002,
        fields: {
            catchPoint: null,
            isOccupied: false
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "Player.PlayerCatchPoint#init", this ); }

                this.isOccupied = false;
            }
        }
    });
    /*Player+PlayerCatchPoint end.*/

    /*Shelf start.*/
    Bridge.define("Shelf", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            shelfPoints: null,
            placedBooksCount: 0,
            playerStandPoint: null,
            circle: null,
            animDuration: 0,
            minScale: 0,
            maxScale: 0,
            shelf_Cam: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "Shelf#init", this ); }

                this.placedBooksCount = 0;
                this.animDuration = 0.4;
                this.minScale = 0.55;
                this.maxScale = 0.75;
            }
        },
        methods: {
            /*Shelf.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "Shelf#Start", this ); }

                this.StartCoroutine$1(this.AnimateCircle());
            },
            /*Shelf.Start end.*/

            /*Shelf.AnimateCircle start.*/
            AnimateCircle: function () {
if ( TRACE ) { TRACE( "Shelf#AnimateCircle", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    min,
                    max,
                    elapsed,
                    t,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    min = new pc.Vec3( 1, 1, 1 ).clone().scale( this.minScale );
                                        max = new pc.Vec3( 1, 1, 1 ).clone().scale( this.maxScale );
                                        elapsed = 0.0;
                                    $step = 1;
                                    continue;
                                }
                                case 1: {
                                    if ( true ) {
                                            $step = 2;
                                            continue;
                                        } 
                                        $step = 4;
                                        continue;
                                }
                                case 2: {
                                    elapsed += UnityEngine.Time.deltaTime;
                                        t = UnityEngine.Mathf.PingPong(elapsed / this.animDuration, 1.0);
                                        this.circle.localScale = new pc.Vec3().lerp( min, max, t );
                                        $enumerator.current = null;
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    
                                        $step = 1;
                                        continue;
                                }
                                case 4: {

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*Shelf.AnimateCircle end.*/

            /*Shelf.OnTriggerEnter start.*/
            OnTriggerEnter: function (other) {
if ( TRACE ) { TRACE( "Shelf#OnTriggerEnter", this ); }

                CharacterMovement.instance.HideMarker();
                // Debug.Log("shelf trigger");
                if (this.placedBooksCount >= 10) {
                    UIManager.instance.DisplayInfoMsg("Bucket Filled");
                    this.GetComponent(UnityEngine.Collider).enabled = false;
                    return;
                }
                AudioManager.instance.PlayCheckPointSound();
                other.transform.position = this.playerStandPoint.position.$clone();
                other.transform.rotation = this.playerStandPoint.rotation.$clone();
                UIManager.instance.DisplayInstruction(true, "Place Books");
                CharacterMovement.instance.EnableMovement(false);
                // CharacterMovement.instance.(false);
                UIManager.instance.EnablePlayerControls(false);
                this.StartCoroutine$1(Player.Instance.PlaceBooksOnShelf(this.shelfPoints, this));
            },
            /*Shelf.OnTriggerEnter end.*/


        }
    });
    /*Shelf end.*/

    /*Shelf+ShelfPoint start.*/
    Bridge.define("Shelf.ShelfPoint", {
        $kind: 1002,
        fields: {
            point: null,
            isOccupied: false
        }
    });
    /*Shelf+ShelfPoint end.*/

    /*UIManager start.*/
    Bridge.define("UIManager", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                instance: null
            }
        },
        fields: {
            playerControlPanel: null,
            endInstructionPanel: null,
            instructionCntnr: null,
            instructionText: null,
            infoImg: null,
            infoTxt: null
        },
        methods: {
            /*UIManager.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "UIManager#Awake", this ); }

                UIManager.instance = this;
            },
            /*UIManager.Awake end.*/

            /*UIManager.EnablePlayerControls start.*/
            EnablePlayerControls: function (_enable) {
if ( TRACE ) { TRACE( "UIManager#EnablePlayerControls", this ); }

                this.playerControlPanel.SetActive(_enable);
            },
            /*UIManager.EnablePlayerControls end.*/

            /*UIManager.DisplayInstruction start.*/
            DisplayInstruction: function (_show, _msg) {
if ( TRACE ) { TRACE( "UIManager#DisplayInstruction", this ); }

                if (_msg === void 0) { _msg = ""; }
                this.instructionText.text = _msg;
                this.instructionCntnr.GetComponent(UnityEngine.Animator).SetBool$1("Show", _show);
            },
            /*UIManager.DisplayInstruction end.*/

            /*UIManager.DisplayInfoMsg start.*/
            DisplayInfoMsg: function (_msg) {
if ( TRACE ) { TRACE( "UIManager#DisplayInfoMsg", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    if (_msg === void 0) { _msg = ""; }
                                        this.infoTxt.text = _msg;
                                        this.infoImg.SetActive(true);
                                        $enumerator.current = new UnityEngine.WaitForSeconds(1);
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    this.infoImg.SetActive(false);

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*UIManager.DisplayInfoMsg end.*/

            /*UIManager.OnCTAPressed start.*/
            OnCTAPressed: function () {
if ( TRACE ) { TRACE( "UIManager#OnCTAPressed", this ); }

                Luna.Unity.Playable.InstallFullGame();
                UnityEngine.Debug.Log$1("CTA pressed");
            },
            /*UIManager.OnCTAPressed end.*/

            /*UIManager.EndGame start.*/
            EndGame: function () {
if ( TRACE ) { TRACE( "UIManager#EndGame", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    $enumerator.current = new UnityEngine.WaitForSeconds(2.0);
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    Luna.Unity.LifeCycle.GameEnded();
                                        this.endInstructionPanel.SetActive(true);

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*UIManager.EndGame end.*/

            /*UIManager.DisableUIControls start.*/
            DisableUIControls: function () {
if ( TRACE ) { TRACE( "UIManager#DisableUIControls", this ); }

                this.playerControlPanel.SetActive(false);
                this.instructionCntnr.SetActive(false);
            },
            /*UIManager.DisableUIControls end.*/

            /*UIManager.EnableUIControls start.*/
            EnableUIControls: function () {
if ( TRACE ) { TRACE( "UIManager#EnableUIControls", this ); }

                this.playerControlPanel.SetActive(true);
                this.instructionCntnr.SetActive(true);
            },
            /*UIManager.EnableUIControls end.*/


        }
    });
    /*UIManager end.*/

    if ( MODULE_reflection ) {
    var $m = Bridge.setMetadata,
        $n = ["System","UnityEngine","System.Collections","UnityEngine.UI"];

    /*CameraFollower start.*/
    $m("CameraFollower", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":2,"n":"EnableFollowCam","t":8,"pi":[{"n":"_enable","pt":$n[0].Boolean,"ps":0}],"sn":"EnableFollowCam","rt":$n[0].Void,"p":[$n[0].Boolean]},{"a":2,"n":"GetCamPosition","t":8,"sn":"GetCamPosition","rt":$n[0].ValueTuple$2(UnityEngine.Vector3,UnityEngine.Quaternion)},{"a":1,"n":"LateUpdate","t":8,"sn":"LateUpdate","rt":$n[0].Void},{"a":2,"n":"MoveCamera","t":8,"pi":[{"n":"target","pt":$n[1].Transform,"ps":0}],"sn":"MoveCamera","rt":$n[0].Void,"p":[$n[1].Transform]},{"a":1,"n":"MoveCameraRoutine","t":8,"pi":[{"n":"target","pt":$n[1].Transform,"ps":0}],"sn":"MoveCameraRoutine","rt":$n[2].IEnumerator,"p":[$n[1].Transform]},{"a":2,"n":"ResetCamera","t":8,"sn":"ResetCamera","rt":$n[0].Void},{"a":2,"n":"RoomViewCam","t":8,"pi":[{"n":"target","pt":$n[1].Transform,"ps":0}],"sn":"RoomViewCam","rt":$n[2].IEnumerator,"p":[$n[1].Transform]},{"a":1,"n":"cameraRoutine","t":4,"rt":$n[1].Coroutine,"sn":"cameraRoutine"},{"a":1,"n":"cameraVelocity","t":4,"rt":$n[1].Vector3,"sn":"cameraVelocity"},{"a":1,"n":"canFollowCam","t":4,"rt":$n[0].Boolean,"sn":"canFollowCam","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"character","t":4,"rt":$n[1].Transform,"sn":"character"},{"a":1,"n":"currentPosition","t":4,"rt":$n[1].Vector3,"sn":"currentPosition"},{"a":1,"n":"currentRotation","t":4,"rt":$n[1].Quaternion,"sn":"currentRotation"},{"a":1,"n":"duration","t":4,"rt":$n[0].Single,"sn":"duration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"followSpeed","t":4,"rt":$n[0].Single,"sn":"followSpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"inRoomPositionOffset","t":4,"rt":$n[1].Vector3,"sn":"inRoomPositionOffset"},{"a":1,"n":"initialRotation","t":4,"rt":$n[1].Quaternion,"sn":"initialRotation"},{"a":2,"n":"instance","is":true,"t":4,"rt":CameraFollower,"sn":"instance"},{"a":2,"n":"positionOffset","t":4,"rt":$n[1].Vector3,"sn":"positionOffset"}]}; }, $n);
    /*CameraFollower end.*/

    /*CharacterMovement start.*/
    $m("CharacterMovement", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"AnimateCircle","t":8,"pi":[{"n":"_targetCircle","pt":$n[1].Transform,"ps":0}],"sn":"AnimateCircle","rt":$n[2].IEnumerator,"p":[$n[1].Transform]},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":2,"n":"DisplayTargetMarker","t":8,"pi":[{"n":"_target","pt":$n[1].Transform,"ps":0}],"sn":"DisplayTargetMarker","rt":$n[0].Void,"p":[$n[1].Transform]},{"a":2,"n":"EnableCameraFollow","t":8,"pi":[{"n":"_enable","pt":$n[0].Boolean,"ps":0}],"sn":"EnableCameraFollow","rt":$n[0].Void,"p":[$n[0].Boolean]},{"a":2,"n":"EnableMovement","t":8,"pi":[{"n":"_enable","pt":$n[0].Boolean,"ps":0}],"sn":"EnableMovement","rt":$n[0].Void,"p":[$n[0].Boolean]},{"a":2,"n":"EnablePlayerCamera","t":8,"pi":[{"n":"_enable","pt":$n[0].Boolean,"ps":0}],"sn":"EnablePlayerCamera","rt":$n[0].Void,"p":[$n[0].Boolean]},{"a":1,"n":"FixedUpdate","t":8,"sn":"FixedUpdate","rt":$n[0].Void},{"a":2,"n":"HideMarker","t":8,"sn":"HideMarker","rt":$n[0].Void},{"a":2,"n":"Initialize","t":8,"sn":"Initialize","rt":$n[0].Void},{"a":2,"n":"PlayAnimation","t":8,"pi":[{"n":"_animName","pt":$n[0].String,"ps":0}],"sn":"PlayAnimation","rt":$n[0].Void,"p":[$n[0].String]},{"a":1,"n":"ProcessInputAndAnimation","t":8,"sn":"ProcessInputAndAnimation","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":2,"n":"UpdatePlayerPosition","t":8,"pi":[{"n":"_target","pt":$n[1].Transform,"ps":0}],"sn":"UpdatePlayerPosition","rt":$n[2].IEnumerator,"p":[$n[1].Transform]},{"a":1,"n":"MoveHash","is":true,"t":4,"rt":$n[0].Int32,"sn":"MoveHash","ro":true,"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"_currentMoveState","t":4,"rt":$n[0].Int32,"sn":"_currentMoveState","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"_moveDirection","t":4,"rt":$n[1].Vector3,"sn":"_moveDirection"},{"a":2,"n":"camSwitchingTime","t":4,"rt":$n[0].Single,"sn":"camSwitchingTime","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"canMove","t":4,"rt":$n[0].Boolean,"sn":"canMove","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"displayMarker","t":4,"rt":$n[0].Boolean,"sn":"displayMarker","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"instance","is":true,"t":4,"rt":CharacterMovement,"sn":"instance"},{"a":1,"n":"isRepositioning","t":4,"rt":$n[0].Boolean,"sn":"isRepositioning","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"joystick","t":4,"rt":PlayableDynamicJoystick,"sn":"joystick"},{"a":1,"n":"markerTarget","t":4,"rt":$n[1].Transform,"sn":"markerTarget"},{"a":2,"n":"moveSpeed","t":4,"rt":$n[0].Single,"sn":"moveSpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"playerAnimator","t":4,"rt":$n[1].Animator,"sn":"playerAnimator"},{"a":2,"n":"playerCamera","t":4,"rt":CameraFollower,"sn":"playerCamera"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"rb","t":4,"rt":$n[1].Rigidbody,"sn":"rb"},{"a":2,"n":"rotationSpeed","t":4,"rt":$n[0].Single,"sn":"rotationSpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"targetMarker","t":4,"rt":$n[1].GameObject,"sn":"targetMarker"}]}; }, $n);
    /*CharacterMovement end.*/

    /*Movement start.*/
    $m("Movement", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":2,"n":"EnableMovement","t":8,"pi":[{"n":"_enable","pt":$n[0].Boolean,"ps":0}],"sn":"EnableMovement","rt":$n[0].Void,"p":[$n[0].Boolean]},{"a":2,"n":"Initialize","t":8,"sn":"Initialize","rt":$n[0].Void},{"a":1,"n":"Move","t":8,"sn":"Move","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":2,"n":"canMove","t":4,"rt":$n[0].Boolean,"sn":"canMove","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"instance","is":true,"t":4,"rt":Movement,"sn":"instance"},{"a":2,"n":"joystick","t":4,"rt":PlayableDynamicJoystick,"sn":"joystick"},{"a":2,"n":"moveSpeed","t":4,"rt":$n[0].Single,"sn":"moveSpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"rotationSpeed","t":4,"rt":$n[0].Single,"sn":"rotationSpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"velocity","t":4,"rt":$n[1].Vector3,"sn":"velocity"}]}; }, $n);
    /*Movement end.*/

    /*PlayableDynamicJoystick start.*/
    $m("PlayableDynamicJoystick", function () { return {"nested":[PlayableDynamicJoystick.AxisOptions],"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"FormatInput","t":8,"sn":"FormatInput","rt":$n[0].Void},{"a":1,"n":"HandleInput","t":8,"pi":[{"n":"magnitude","pt":$n[0].Single,"ps":0},{"n":"normalised","pt":$n[1].Vector2,"ps":1},{"n":"radius","pt":$n[1].Vector2,"ps":2},{"n":"cam","pt":$n[1].Camera,"ps":3}],"sn":"HandleInput","rt":$n[0].Void,"p":[$n[0].Single,$n[1].Vector2,$n[1].Vector2,$n[1].Camera]},{"a":1,"n":"IsPointerOverUI","t":8,"sn":"IsPointerOverUI","rt":$n[0].Boolean,"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"OnDrag","t":8,"pi":[{"n":"_mousePosition","pt":$n[1].Vector2,"ps":0}],"sn":"OnDrag","rt":$n[0].Void,"p":[$n[1].Vector2]},{"a":1,"n":"OnMouseDown","t":8,"pi":[{"n":"_mousePosition","pt":$n[1].Vector2,"ps":0}],"sn":"OnMouseDown","rt":$n[0].Void,"p":[$n[1].Vector2]},{"a":1,"n":"OnMouseUp","t":8,"pi":[{"n":"_mousePosition","pt":$n[1].Vector2,"ps":0}],"sn":"OnMouseUp","rt":$n[0].Void,"p":[$n[1].Vector2]},{"a":1,"n":"ScreenPointToAnchoredPosition","t":8,"pi":[{"n":"screenPosition","pt":$n[1].Vector2,"ps":0}],"sn":"ScreenPointToAnchoredPosition","rt":$n[1].Vector2,"p":[$n[1].Vector2]},{"a":1,"n":"SetBackGroundPostion","t":8,"sn":"SetBackGroundPostion","rt":$n[0].Void},{"a":2,"n":"SimulatePointerUp","t":8,"sn":"SimulatePointerUp","rt":$n[0].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":1,"n":"UpdateBackGround","t":8,"pi":[{"n":"_mousePosition","pt":$n[1].Vector2,"ps":0},{"n":"_alphaVal","pt":$n[0].Single,"ps":1}],"sn":"UpdateBackGround","rt":$n[0].Void,"p":[$n[1].Vector2,$n[0].Single]},{"a":2,"n":"Direction","t":16,"rt":$n[1].Vector2,"g":{"a":2,"n":"get_Direction","t":8,"rt":$n[1].Vector2,"fg":"Direction"},"fn":"Direction"},{"a":2,"n":"Horizontal","t":16,"rt":$n[0].Single,"g":{"a":2,"n":"get_Horizontal","t":8,"rt":$n[0].Single,"fg":"Horizontal","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},"fn":"Horizontal"},{"a":2,"n":"Vertical","t":16,"rt":$n[0].Single,"g":{"a":2,"n":"get_Vertical","t":8,"rt":$n[0].Single,"fg":"Vertical","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},"fn":"Vertical"},{"a":2,"n":"axisOptions","t":4,"rt":PlayableDynamicJoystick.AxisOptions,"sn":"axisOptions","box":function ($v) { return Bridge.box($v, PlayableDynamicJoystick.AxisOptions, System.Enum.toStringFn(PlayableDynamicJoystick.AxisOptions));}},{"a":2,"n":"background","t":4,"rt":$n[1].RectTransform,"sn":"background"},{"a":1,"n":"baseRect","t":4,"rt":$n[1].RectTransform,"sn":"baseRect"},{"a":1,"n":"cam","t":4,"rt":$n[1].Camera,"sn":"cam"},{"a":1,"n":"canvas","t":4,"rt":$n[1].Canvas,"sn":"canvas"},{"a":2,"n":"deadZone","t":4,"rt":$n[0].Single,"sn":"deadZone","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"fixedPosition","t":4,"rt":$n[1].Vector2,"sn":"fixedPosition"},{"a":2,"n":"handleRange","t":4,"rt":$n[0].Single,"sn":"handleRange","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"input","t":4,"rt":$n[1].Vector2,"sn":"input"},{"a":1,"n":"isPointerDown","t":4,"rt":$n[0].Boolean,"sn":"isPointerDown","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"joystickHandle","t":4,"rt":$n[1].RectTransform,"sn":"joystickHandle"},{"a":2,"n":"maxRadius","t":4,"rt":$n[0].Single,"sn":"maxRadius","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"startPos","t":4,"rt":$n[1].Vector2,"sn":"startPos"},{"a":1,"n":"targetAlphaDown","t":4,"rt":$n[0].Single,"sn":"targetAlphaDown","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"targetAlphaUP","t":4,"rt":$n[0].Single,"sn":"targetAlphaUP","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"uiCamera","t":4,"rt":$n[1].Camera,"sn":"uiCamera"}]}; }, $n);
    /*PlayableDynamicJoystick end.*/

    /*PlayableDynamicJoystick+AxisOptions start.*/
    $m("PlayableDynamicJoystick.AxisOptions", function () { return {"td":PlayableDynamicJoystick,"att":8450,"a":2,"at":[new System.SerializableAttribute()],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Both","is":true,"t":4,"rt":PlayableDynamicJoystick.AxisOptions,"sn":"Both","box":function ($v) { return Bridge.box($v, PlayableDynamicJoystick.AxisOptions, System.Enum.toStringFn(PlayableDynamicJoystick.AxisOptions));}},{"a":2,"n":"Horizontal","is":true,"t":4,"rt":PlayableDynamicJoystick.AxisOptions,"sn":"Horizontal","box":function ($v) { return Bridge.box($v, PlayableDynamicJoystick.AxisOptions, System.Enum.toStringFn(PlayableDynamicJoystick.AxisOptions));}},{"a":2,"n":"Vertical","is":true,"t":4,"rt":PlayableDynamicJoystick.AxisOptions,"sn":"Vertical","box":function ($v) { return Bridge.box($v, PlayableDynamicJoystick.AxisOptions, System.Enum.toStringFn(PlayableDynamicJoystick.AxisOptions));}}]}; }, $n);
    /*PlayableDynamicJoystick+AxisOptions end.*/

    /*AudioManager start.*/
    $m("AudioManager", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":2,"n":"PlayCheckPointSound","t":8,"sn":"PlayCheckPointSound","rt":$n[0].Void},{"a":2,"n":"PlayLvlCmpltSnd","t":8,"sn":"PlayLvlCmpltSnd","rt":$n[0].Void},{"a":2,"n":"PlayPickBookSound","t":8,"sn":"PlayPickBookSound","rt":$n[0].Void},{"a":2,"n":"PlayPopBookSound","t":8,"sn":"PlayPopBookSound","rt":$n[0].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"PickTomato","t":4,"rt":$n[1].AudioClip,"sn":"PickTomato"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"PopTomato","t":4,"rt":$n[1].AudioClip,"sn":"PopTomato"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"bgAS","t":4,"rt":$n[1].AudioSource,"sn":"bgAS"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"checkPoint","t":4,"rt":$n[1].AudioClip,"sn":"checkPoint"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"inGameAS","t":4,"rt":$n[1].AudioSource,"sn":"inGameAS"},{"a":2,"n":"instance","is":true,"t":4,"rt":AudioManager,"sn":"instance"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"levelComplete","t":4,"rt":$n[1].AudioClip,"sn":"levelComplete"}]}; }, $n);
    /*AudioManager end.*/

    /*Book start.*/
    $m("Book", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"OnTriggerEnter","t":8,"pi":[{"n":"other","pt":$n[1].Collider,"ps":0}],"sn":"OnTriggerEnter","rt":$n[0].Void,"p":[$n[1].Collider]},{"a":1,"n":"isCaught","t":4,"rt":$n[0].Boolean,"sn":"isCaught","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}}]}; }, $n);
    /*Book end.*/

    /*Door start.*/
    $m("Door", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"OnTriggerEnter","t":8,"pi":[{"n":"other","pt":$n[1].Collider,"ps":0}],"sn":"OnTriggerEnter","rt":$n[0].Void,"p":[$n[1].Collider]},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"door_Cam","t":4,"rt":$n[1].Transform,"sn":"door_Cam"}]}; }, $n);
    /*Door end.*/

    /*GameController start.*/
    $m("GameController", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":1,"n":"InitializeGame","t":8,"sn":"InitializeGame","rt":$n[0].Void},{"a":2,"n":"NextBooksTarget","t":8,"sn":"NextBooksTarget","rt":$n[0].Void},{"a":2,"n":"NextTargetMarker","t":8,"sn":"NextTargetMarker","rt":$n[0].Void},{"a":2,"n":"NextTargetShelf","t":8,"sn":"NextTargetShelf","rt":$n[0].Void},{"a":2,"n":"OnEndGame","t":8,"sn":"OnEndGame","rt":$n[0].Void},{"a":2,"n":"PlayConfetti","t":8,"sn":"PlayConfetti","rt":$n[0].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"TargetPoins","t":4,"rt":System.Array.type(UnityEngine.GameObject),"sn":"TargetPoins"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"confettiCamera","t":4,"rt":$n[1].Transform,"sn":"confettiCamera"},{"a":2,"n":"confettiParticles","t":4,"rt":$n[1].Transform,"sn":"confettiParticles"},{"a":1,"n":"currentTargetIndex","t":4,"rt":$n[0].Int32,"sn":"currentTargetIndex","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"instance","is":true,"t":4,"rt":GameController,"sn":"instance"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"shelfs","t":4,"rt":System.Array.type(Shelf),"sn":"shelfs"},{"a":2,"n":"totalPlacedBooks","t":4,"rt":$n[0].Int32,"sn":"totalPlacedBooks","box":function ($v) { return Bridge.box($v, System.Int32);}}]}; }, $n);
    /*GameController end.*/

    /*Player start.*/
    $m("Player", function () { return {"nested":[Player.PlayerCatchPoint],"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":2,"n":"CatchBook","t":8,"pi":[{"n":"book","pt":$n[1].Transform,"ps":0}],"sn":"CatchBook","rt":$n[0].Boolean,"p":[$n[1].Transform],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"CatchBookRoutine","t":8,"pi":[{"n":"point","pt":Player.PlayerCatchPoint,"ps":0},{"n":"book","pt":$n[1].Transform,"ps":1}],"sn":"CatchBookRoutine","rt":$n[2].IEnumerator,"p":[Player.PlayerCatchPoint,$n[1].Transform]},{"a":2,"n":"GetFreeCatchPoint","t":8,"sn":"GetFreeCatchPoint","rt":Player.PlayerCatchPoint},{"a":1,"n":"MoveBezier","t":8,"pi":[{"n":"book","pt":$n[1].Transform,"ps":0},{"n":"start","pt":$n[1].Vector3,"ps":1},{"n":"control","pt":$n[1].Vector3,"ps":2},{"n":"end","pt":$n[1].Vector3,"ps":3},{"n":"startRotation","pt":$n[1].Quaternion,"ps":4},{"n":"endRotation","pt":$n[1].Quaternion,"ps":5},{"n":"duration","pt":$n[0].Single,"ps":6}],"sn":"MoveBezier","rt":$n[2].IEnumerator,"p":[$n[1].Transform,$n[1].Vector3,$n[1].Vector3,$n[1].Vector3,$n[1].Quaternion,$n[1].Quaternion,$n[0].Single]},{"a":1,"n":"MoveBook","t":8,"pi":[{"n":"book","pt":$n[1].Transform,"ps":0},{"n":"shelfPoint","pt":$n[1].Transform,"ps":1}],"sn":"MoveBook","rt":$n[2].IEnumerator,"p":[$n[1].Transform,$n[1].Transform]},{"a":2,"n":"PlaceBooksOnShelf","t":8,"pi":[{"n":"shelfPoints","pt":System.Array.type(Shelf.ShelfPoint),"ps":0},{"n":"shelf","pt":Shelf,"ps":1}],"sn":"PlaceBooksOnShelf","rt":$n[2].IEnumerator,"p":[System.Array.type(Shelf.ShelfPoint),Shelf]},{"a":2,"n":"Instance","is":true,"t":4,"rt":Player,"sn":"Instance"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"catchDuration","t":4,"rt":$n[0].Single,"sn":"catchDuration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"currentPickedBooks","t":4,"rt":$n[0].Int32,"sn":"currentPickedBooks","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"halfDuration","t":4,"rt":$n[0].Single,"sn":"halfDuration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"headPoint","t":4,"rt":$n[1].Transform,"sn":"headPoint"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"moveBookDuration","t":4,"rt":$n[0].Single,"sn":"moveBookDuration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"playerCatchPoints","t":4,"rt":System.Array.type(Player.PlayerCatchPoint),"sn":"playerCatchPoints"}]}; }, $n);
    /*Player end.*/

    /*Player+PlayerCatchPoint start.*/
    $m("Player.PlayerCatchPoint", function () { return {"td":Player,"att":1056770,"a":2,"at":[new System.SerializableAttribute()],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"catchPoint","t":4,"rt":$n[1].Transform,"sn":"catchPoint"},{"a":2,"n":"isOccupied","t":4,"rt":$n[0].Boolean,"sn":"isOccupied","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}}]}; }, $n);
    /*Player+PlayerCatchPoint end.*/

    /*Shelf start.*/
    $m("Shelf", function () { return {"nested":[Shelf.ShelfPoint],"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"AnimateCircle","t":8,"sn":"AnimateCircle","rt":$n[2].IEnumerator},{"a":1,"n":"OnTriggerEnter","t":8,"pi":[{"n":"other","pt":$n[1].Collider,"ps":0}],"sn":"OnTriggerEnter","rt":$n[0].Void,"p":[$n[1].Collider]},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"animDuration","t":4,"rt":$n[0].Single,"sn":"animDuration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"circle","t":4,"rt":$n[1].Transform,"sn":"circle"},{"a":1,"n":"maxScale","t":4,"rt":$n[0].Single,"sn":"maxScale","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"minScale","t":4,"rt":$n[0].Single,"sn":"minScale","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"placedBooksCount","t":4,"rt":$n[0].Int32,"sn":"placedBooksCount","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"playerStandPoint","t":4,"rt":$n[1].Transform,"sn":"playerStandPoint"},{"a":2,"n":"shelfPoints","t":4,"rt":System.Array.type(Shelf.ShelfPoint),"sn":"shelfPoints"},{"a":2,"n":"shelf_Cam","t":4,"rt":$n[1].Transform,"sn":"shelf_Cam"}]}; }, $n);
    /*Shelf end.*/

    /*Shelf+ShelfPoint start.*/
    $m("Shelf.ShelfPoint", function () { return {"td":Shelf,"att":1056770,"a":2,"at":[new System.SerializableAttribute()],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"isOccupied","t":4,"rt":$n[0].Boolean,"sn":"isOccupied","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"point","t":4,"rt":$n[1].Transform,"sn":"point"}]}; }, $n);
    /*Shelf+ShelfPoint end.*/

    /*UIManager start.*/
    $m("UIManager", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":2,"n":"DisableUIControls","t":8,"sn":"DisableUIControls","rt":$n[0].Void},{"a":2,"n":"DisplayInfoMsg","t":8,"pi":[{"n":"_msg","dv":"","o":true,"pt":$n[0].String,"ps":0}],"sn":"DisplayInfoMsg","rt":$n[2].IEnumerator,"p":[$n[0].String]},{"a":2,"n":"DisplayInstruction","t":8,"pi":[{"n":"_show","pt":$n[0].Boolean,"ps":0},{"n":"_msg","dv":"","o":true,"pt":$n[0].String,"ps":1}],"sn":"DisplayInstruction","rt":$n[0].Void,"p":[$n[0].Boolean,$n[0].String]},{"a":2,"n":"EnablePlayerControls","t":8,"pi":[{"n":"_enable","pt":$n[0].Boolean,"ps":0}],"sn":"EnablePlayerControls","rt":$n[0].Void,"p":[$n[0].Boolean]},{"a":2,"n":"EnableUIControls","t":8,"sn":"EnableUIControls","rt":$n[0].Void},{"a":2,"n":"EndGame","t":8,"sn":"EndGame","rt":$n[2].IEnumerator},{"a":2,"n":"OnCTAPressed","t":8,"sn":"OnCTAPressed","rt":$n[0].Void},{"a":2,"n":"endInstructionPanel","t":4,"rt":$n[1].GameObject,"sn":"endInstructionPanel"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"infoImg","t":4,"rt":$n[1].GameObject,"sn":"infoImg"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"infoTxt","t":4,"rt":$n[3].Text,"sn":"infoTxt"},{"a":2,"n":"instance","is":true,"t":4,"rt":UIManager,"sn":"instance"},{"at":[new UnityEngine.HeaderAttribute("Instruction Fields")],"a":2,"n":"instructionCntnr","t":4,"rt":$n[1].GameObject,"sn":"instructionCntnr"},{"a":2,"n":"instructionText","t":4,"rt":$n[3].Text,"sn":"instructionText"},{"at":[new UnityEngine.HeaderAttribute("UI Panels")],"a":2,"n":"playerControlPanel","t":4,"rt":$n[1].GameObject,"sn":"playerControlPanel"}]}; }, $n);
    /*UIManager end.*/

    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty start.*/
    $m("IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"}]}; }, $n);
    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty end.*/

    }});
