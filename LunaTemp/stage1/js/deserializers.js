var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i524 = root || request.c( 'UnityEngine.JointSpring' )
  var i525 = data
  i524.spring = i525[0]
  i524.damper = i525[1]
  i524.targetPosition = i525[2]
  return i524
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i526 = root || request.c( 'UnityEngine.JointMotor' )
  var i527 = data
  i526.m_TargetVelocity = i527[0]
  i526.m_Force = i527[1]
  i526.m_FreeSpin = i527[2]
  return i526
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i528 = root || request.c( 'UnityEngine.JointLimits' )
  var i529 = data
  i528.m_Min = i529[0]
  i528.m_Max = i529[1]
  i528.m_Bounciness = i529[2]
  i528.m_BounceMinVelocity = i529[3]
  i528.m_ContactDistance = i529[4]
  i528.minBounce = i529[5]
  i528.maxBounce = i529[6]
  return i528
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i530 = root || request.c( 'UnityEngine.JointDrive' )
  var i531 = data
  i530.m_PositionSpring = i531[0]
  i530.m_PositionDamper = i531[1]
  i530.m_MaximumForce = i531[2]
  i530.m_UseAcceleration = i531[3]
  return i530
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i532 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i533 = data
  i532.m_Spring = i533[0]
  i532.m_Damper = i533[1]
  return i532
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i534 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i535 = data
  i534.m_Limit = i535[0]
  i534.m_Bounciness = i535[1]
  i534.m_ContactDistance = i535[2]
  return i534
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i536 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i537 = data
  i536.m_ExtremumSlip = i537[0]
  i536.m_ExtremumValue = i537[1]
  i536.m_AsymptoteSlip = i537[2]
  i536.m_AsymptoteValue = i537[3]
  i536.m_Stiffness = i537[4]
  return i536
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i538 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i539 = data
  i538.m_LowerAngle = i539[0]
  i538.m_UpperAngle = i539[1]
  return i538
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i540 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i541 = data
  i540.m_MotorSpeed = i541[0]
  i540.m_MaximumMotorTorque = i541[1]
  return i540
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i542 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i543 = data
  i542.m_DampingRatio = i543[0]
  i542.m_Frequency = i543[1]
  i542.m_Angle = i543[2]
  return i542
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i544 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i545 = data
  i544.m_LowerTranslation = i545[0]
  i544.m_UpperTranslation = i545[1]
  return i544
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i546 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i547 = data
  i546.position = new pc.Vec3( i547[0], i547[1], i547[2] )
  i546.scale = new pc.Vec3( i547[3], i547[4], i547[5] )
  i546.rotation = new pc.Quat(i547[6], i547[7], i547[8], i547[9])
  return i546
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i548 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i549 = data
  request.r(i549[0], i549[1], 0, i548, 'sharedMesh')
  return i548
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i550 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i551 = data
  request.r(i551[0], i551[1], 0, i550, 'additionalVertexStreams')
  i550.enabled = !!i551[2]
  request.r(i551[3], i551[4], 0, i550, 'sharedMaterial')
  var i553 = i551[5]
  var i552 = []
  for(var i = 0; i < i553.length; i += 2) {
  request.r(i553[i + 0], i553[i + 1], 2, i552, '')
  }
  i550.sharedMaterials = i552
  i550.receiveShadows = !!i551[6]
  i550.shadowCastingMode = i551[7]
  i550.sortingLayerID = i551[8]
  i550.sortingOrder = i551[9]
  i550.lightmapIndex = i551[10]
  i550.lightmapSceneIndex = i551[11]
  i550.lightmapScaleOffset = new pc.Vec4( i551[12], i551[13], i551[14], i551[15] )
  i550.lightProbeUsage = i551[16]
  i550.reflectionProbeUsage = i551[17]
  return i550
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i556 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i557 = data
  i556.center = new pc.Vec3( i557[0], i557[1], i557[2] )
  i556.size = new pc.Vec3( i557[3], i557[4], i557[5] )
  i556.enabled = !!i557[6]
  i556.isTrigger = !!i557[7]
  request.r(i557[8], i557[9], 0, i556, 'material')
  return i556
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i558 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i559 = data
  i558.name = i559[0]
  i558.tagId = i559[1]
  i558.enabled = !!i559[2]
  i558.isStatic = !!i559[3]
  i558.layer = i559[4]
  return i558
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i560 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i561 = data
  i560.name = i561[0]
  i560.halfPrecision = !!i561[1]
  i560.useSimplification = !!i561[2]
  i560.useUInt32IndexFormat = !!i561[3]
  i560.vertexCount = i561[4]
  i560.aabb = i561[5]
  var i563 = i561[6]
  var i562 = []
  for(var i = 0; i < i563.length; i += 1) {
    i562.push( !!i563[i + 0] );
  }
  i560.streams = i562
  i560.vertices = i561[7]
  var i565 = i561[8]
  var i564 = []
  for(var i = 0; i < i565.length; i += 1) {
    i564.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i565[i + 0]) );
  }
  i560.subMeshes = i564
  var i567 = i561[9]
  var i566 = []
  for(var i = 0; i < i567.length; i += 16) {
    i566.push( new pc.Mat4().setData(i567[i + 0], i567[i + 1], i567[i + 2], i567[i + 3],  i567[i + 4], i567[i + 5], i567[i + 6], i567[i + 7],  i567[i + 8], i567[i + 9], i567[i + 10], i567[i + 11],  i567[i + 12], i567[i + 13], i567[i + 14], i567[i + 15]) );
  }
  i560.bindposes = i566
  var i569 = i561[10]
  var i568 = []
  for(var i = 0; i < i569.length; i += 1) {
    i568.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i569[i + 0]) );
  }
  i560.blendShapes = i568
  return i560
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i574 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i575 = data
  i574.triangles = i575[0]
  return i574
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i580 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i581 = data
  i580.name = i581[0]
  var i583 = i581[1]
  var i582 = []
  for(var i = 0; i < i583.length; i += 1) {
    i582.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i583[i + 0]) );
  }
  i580.frames = i582
  return i580
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i584 = root || new pc.UnityMaterial()
  var i585 = data
  i584.name = i585[0]
  request.r(i585[1], i585[2], 0, i584, 'shader')
  i584.renderQueue = i585[3]
  i584.enableInstancing = !!i585[4]
  var i587 = i585[5]
  var i586 = []
  for(var i = 0; i < i587.length; i += 1) {
    i586.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i587[i + 0]) );
  }
  i584.floatParameters = i586
  var i589 = i585[6]
  var i588 = []
  for(var i = 0; i < i589.length; i += 1) {
    i588.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i589[i + 0]) );
  }
  i584.colorParameters = i588
  var i591 = i585[7]
  var i590 = []
  for(var i = 0; i < i591.length; i += 1) {
    i590.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i591[i + 0]) );
  }
  i584.vectorParameters = i590
  var i593 = i585[8]
  var i592 = []
  for(var i = 0; i < i593.length; i += 1) {
    i592.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i593[i + 0]) );
  }
  i584.textureParameters = i592
  var i595 = i585[9]
  var i594 = []
  for(var i = 0; i < i595.length; i += 1) {
    i594.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i595[i + 0]) );
  }
  i584.materialFlags = i594
  return i584
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i598 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i599 = data
  i598.name = i599[0]
  i598.value = i599[1]
  return i598
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i602 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i603 = data
  i602.name = i603[0]
  i602.value = new pc.Color(i603[1], i603[2], i603[3], i603[4])
  return i602
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i606 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i607 = data
  i606.name = i607[0]
  i606.value = new pc.Vec4( i607[1], i607[2], i607[3], i607[4] )
  return i606
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i610 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i611 = data
  i610.name = i611[0]
  request.r(i611[1], i611[2], 0, i610, 'value')
  return i610
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i614 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i615 = data
  i614.name = i615[0]
  i614.enabled = !!i615[1]
  return i614
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i616 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i617 = data
  i616.name = i617[0]
  i616.width = i617[1]
  i616.height = i617[2]
  i616.mipmapCount = i617[3]
  i616.anisoLevel = i617[4]
  i616.filterMode = i617[5]
  i616.hdr = !!i617[6]
  i616.format = i617[7]
  i616.wrapMode = i617[8]
  i616.alphaIsTransparency = !!i617[9]
  i616.alphaSource = i617[10]
  i616.graphicsFormat = i617[11]
  i616.sRGBTexture = !!i617[12]
  i616.desiredColorSpace = i617[13]
  i616.wrapU = i617[14]
  i616.wrapV = i617[15]
  return i616
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i618 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i619 = data
  i618.pivot = new pc.Vec2( i619[0], i619[1] )
  i618.anchorMin = new pc.Vec2( i619[2], i619[3] )
  i618.anchorMax = new pc.Vec2( i619[4], i619[5] )
  i618.sizeDelta = new pc.Vec2( i619[6], i619[7] )
  i618.anchoredPosition3D = new pc.Vec3( i619[8], i619[9], i619[10] )
  i618.rotation = new pc.Quat(i619[11], i619[12], i619[13], i619[14])
  i618.scale = new pc.Vec3( i619[15], i619[16], i619[17] )
  return i618
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i620 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i621 = data
  i620.planeDistance = i621[0]
  i620.referencePixelsPerUnit = i621[1]
  i620.isFallbackOverlay = !!i621[2]
  i620.renderMode = i621[3]
  i620.renderOrder = i621[4]
  i620.sortingLayerName = i621[5]
  i620.sortingOrder = i621[6]
  i620.scaleFactor = i621[7]
  request.r(i621[8], i621[9], 0, i620, 'worldCamera')
  i620.overrideSorting = !!i621[10]
  i620.pixelPerfect = !!i621[11]
  i620.targetDisplay = i621[12]
  i620.overridePixelPerfect = !!i621[13]
  i620.enabled = !!i621[14]
  return i620
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i622 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i623 = data
  i622.m_UiScaleMode = i623[0]
  i622.m_ReferencePixelsPerUnit = i623[1]
  i622.m_ScaleFactor = i623[2]
  i622.m_ReferenceResolution = new pc.Vec2( i623[3], i623[4] )
  i622.m_ScreenMatchMode = i623[5]
  i622.m_MatchWidthOrHeight = i623[6]
  i622.m_PhysicalUnit = i623[7]
  i622.m_FallbackScreenDPI = i623[8]
  i622.m_DefaultSpriteDPI = i623[9]
  i622.m_DynamicPixelsPerUnit = i623[10]
  i622.m_PresetInfoIsWorld = !!i623[11]
  return i622
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i624 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i625 = data
  i624.m_IgnoreReversedGraphics = !!i625[0]
  i624.m_BlockingObjects = i625[1]
  i624.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i625[2] )
  return i624
}

Deserializers["UIManager"] = function (request, data, root) {
  var i626 = root || request.c( 'UIManager' )
  var i627 = data
  request.r(i627[0], i627[1], 0, i626, 'playerControlPanel')
  request.r(i627[2], i627[3], 0, i626, 'endInstructionPanel')
  request.r(i627[4], i627[5], 0, i626, 'instructionCntnr')
  request.r(i627[6], i627[7], 0, i626, 'instructionText')
  request.r(i627[8], i627[9], 0, i626, 'infoImg')
  request.r(i627[10], i627[11], 0, i626, 'infoTxt')
  return i626
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i628 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i629 = data
  i628.cullTransparentMesh = !!i629[0]
  return i628
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i630 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i631 = data
  request.r(i631[0], i631[1], 0, i630, 'animatorController')
  request.r(i631[2], i631[3], 0, i630, 'avatar')
  i630.updateMode = i631[4]
  i630.hasTransformHierarchy = !!i631[5]
  i630.applyRootMotion = !!i631[6]
  var i633 = i631[7]
  var i632 = []
  for(var i = 0; i < i633.length; i += 2) {
  request.r(i633[i + 0], i633[i + 1], 2, i632, '')
  }
  i630.humanBones = i632
  i630.enabled = !!i631[8]
  return i630
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i636 = root || request.c( 'UnityEngine.UI.Image' )
  var i637 = data
  request.r(i637[0], i637[1], 0, i636, 'm_Sprite')
  i636.m_Type = i637[2]
  i636.m_PreserveAspect = !!i637[3]
  i636.m_FillCenter = !!i637[4]
  i636.m_FillMethod = i637[5]
  i636.m_FillAmount = i637[6]
  i636.m_FillClockwise = !!i637[7]
  i636.m_FillOrigin = i637[8]
  i636.m_UseSpriteMesh = !!i637[9]
  i636.m_PixelsPerUnitMultiplier = i637[10]
  request.r(i637[11], i637[12], 0, i636, 'm_Material')
  i636.m_Maskable = !!i637[13]
  i636.m_Color = new pc.Color(i637[14], i637[15], i637[16], i637[17])
  i636.m_RaycastTarget = !!i637[18]
  i636.m_RaycastPadding = new pc.Vec4( i637[19], i637[20], i637[21], i637[22] )
  return i636
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i638 = root || request.c( 'UnityEngine.UI.Text' )
  var i639 = data
  i638.m_FontData = request.d('UnityEngine.UI.FontData', i639[0], i638.m_FontData)
  i638.m_Text = i639[1]
  request.r(i639[2], i639[3], 0, i638, 'm_Material')
  i638.m_Maskable = !!i639[4]
  i638.m_Color = new pc.Color(i639[5], i639[6], i639[7], i639[8])
  i638.m_RaycastTarget = !!i639[9]
  i638.m_RaycastPadding = new pc.Vec4( i639[10], i639[11], i639[12], i639[13] )
  return i638
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i640 = root || request.c( 'UnityEngine.UI.FontData' )
  var i641 = data
  request.r(i641[0], i641[1], 0, i640, 'm_Font')
  i640.m_FontSize = i641[2]
  i640.m_FontStyle = i641[3]
  i640.m_BestFit = !!i641[4]
  i640.m_MinSize = i641[5]
  i640.m_MaxSize = i641[6]
  i640.m_Alignment = i641[7]
  i640.m_AlignByGeometry = !!i641[8]
  i640.m_RichText = !!i641[9]
  i640.m_HorizontalOverflow = i641[10]
  i640.m_VerticalOverflow = i641[11]
  i640.m_LineSpacing = i641[12]
  return i640
}

Deserializers["PlayableDynamicJoystick"] = function (request, data, root) {
  var i642 = root || request.c( 'PlayableDynamicJoystick' )
  var i643 = data
  i642.deadZone = i643[0]
  i642.handleRange = i643[1]
  request.r(i643[2], i643[3], 0, i642, 'uiCamera')
  request.r(i643[4], i643[5], 0, i642, 'background')
  request.r(i643[6], i643[7], 0, i642, 'joystickHandle')
  i642.axisOptions = i643[8]
  i642.maxRadius = i643[9]
  return i642
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i644 = root || request.c( 'UnityEngine.UI.Button' )
  var i645 = data
  i644.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i645[0], i644.m_OnClick)
  i644.m_Navigation = request.d('UnityEngine.UI.Navigation', i645[1], i644.m_Navigation)
  i644.m_Transition = i645[2]
  i644.m_Colors = request.d('UnityEngine.UI.ColorBlock', i645[3], i644.m_Colors)
  i644.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i645[4], i644.m_SpriteState)
  i644.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i645[5], i644.m_AnimationTriggers)
  i644.m_Interactable = !!i645[6]
  request.r(i645[7], i645[8], 0, i644, 'm_TargetGraphic')
  return i644
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i646 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i647 = data
  i646.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i647[0], i646.m_PersistentCalls)
  return i646
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i648 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i649 = data
  var i651 = i649[0]
  var i650 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i651.length; i += 1) {
    i650.add(request.d('UnityEngine.Events.PersistentCall', i651[i + 0]));
  }
  i648.m_Calls = i650
  return i648
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i654 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i655 = data
  request.r(i655[0], i655[1], 0, i654, 'm_Target')
  i654.m_TargetAssemblyTypeName = i655[2]
  i654.m_MethodName = i655[3]
  i654.m_Mode = i655[4]
  i654.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i655[5], i654.m_Arguments)
  i654.m_CallState = i655[6]
  return i654
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i656 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i657 = data
  request.r(i657[0], i657[1], 0, i656, 'm_ObjectArgument')
  i656.m_ObjectArgumentAssemblyTypeName = i657[2]
  i656.m_IntArgument = i657[3]
  i656.m_FloatArgument = i657[4]
  i656.m_StringArgument = i657[5]
  i656.m_BoolArgument = !!i657[6]
  return i656
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i658 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i659 = data
  i658.m_Mode = i659[0]
  i658.m_WrapAround = !!i659[1]
  request.r(i659[2], i659[3], 0, i658, 'm_SelectOnUp')
  request.r(i659[4], i659[5], 0, i658, 'm_SelectOnDown')
  request.r(i659[6], i659[7], 0, i658, 'm_SelectOnLeft')
  request.r(i659[8], i659[9], 0, i658, 'm_SelectOnRight')
  return i658
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i660 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i661 = data
  i660.m_NormalColor = new pc.Color(i661[0], i661[1], i661[2], i661[3])
  i660.m_HighlightedColor = new pc.Color(i661[4], i661[5], i661[6], i661[7])
  i660.m_PressedColor = new pc.Color(i661[8], i661[9], i661[10], i661[11])
  i660.m_SelectedColor = new pc.Color(i661[12], i661[13], i661[14], i661[15])
  i660.m_DisabledColor = new pc.Color(i661[16], i661[17], i661[18], i661[19])
  i660.m_ColorMultiplier = i661[20]
  i660.m_FadeDuration = i661[21]
  return i660
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i662 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i663 = data
  request.r(i663[0], i663[1], 0, i662, 'm_HighlightedSprite')
  request.r(i663[2], i663[3], 0, i662, 'm_PressedSprite')
  request.r(i663[4], i663[5], 0, i662, 'm_SelectedSprite')
  request.r(i663[6], i663[7], 0, i662, 'm_DisabledSprite')
  return i662
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i664 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i665 = data
  i664.m_NormalTrigger = i665[0]
  i664.m_HighlightedTrigger = i665[1]
  i664.m_PressedTrigger = i665[2]
  i664.m_SelectedTrigger = i665[3]
  i664.m_DisabledTrigger = i665[4]
  return i664
}

Deserializers["UnityEngine.UI.Outline"] = function (request, data, root) {
  var i666 = root || request.c( 'UnityEngine.UI.Outline' )
  var i667 = data
  i666.m_EffectColor = new pc.Color(i667[0], i667[1], i667[2], i667[3])
  i666.m_EffectDistance = new pc.Vec2( i667[4], i667[5] )
  i666.m_UseGraphicAlpha = !!i667[6]
  return i666
}

Deserializers["GameController"] = function (request, data, root) {
  var i668 = root || request.c( 'GameController' )
  var i669 = data
  request.r(i669[0], i669[1], 0, i668, 'confettiParticles')
  i668.totalPlacedBooks = i669[2]
  request.r(i669[3], i669[4], 0, i668, 'confettiCamera')
  var i671 = i669[5]
  var i670 = []
  for(var i = 0; i < i671.length; i += 2) {
  request.r(i671[i + 0], i671[i + 1], 2, i670, '')
  }
  i668.TargetPoins = i670
  var i673 = i669[6]
  var i672 = []
  for(var i = 0; i < i673.length; i += 2) {
  request.r(i673[i + 0], i673[i + 1], 2, i672, '')
  }
  i668.shelfs = i672
  return i668
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i678 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i679 = data
  i678.name = i679[0]
  i678.atlasId = i679[1]
  i678.mipmapCount = i679[2]
  i678.hdr = !!i679[3]
  i678.size = i679[4]
  i678.anisoLevel = i679[5]
  i678.filterMode = i679[6]
  var i681 = i679[7]
  var i680 = []
  for(var i = 0; i < i681.length; i += 4) {
    i680.push( UnityEngine.Rect.MinMaxRect(i681[i + 0], i681[i + 1], i681[i + 2], i681[i + 3]) );
  }
  i678.rects = i680
  i678.wrapU = i679[8]
  i678.wrapV = i679[9]
  return i678
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i684 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i685 = data
  i684.name = i685[0]
  i684.index = i685[1]
  i684.startup = !!i685[2]
  return i684
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i686 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i687 = data
  i686.type = i687[0]
  i686.color = new pc.Color(i687[1], i687[2], i687[3], i687[4])
  i686.cullingMask = i687[5]
  i686.intensity = i687[6]
  i686.range = i687[7]
  i686.spotAngle = i687[8]
  i686.shadows = i687[9]
  i686.shadowNormalBias = i687[10]
  i686.shadowBias = i687[11]
  i686.shadowStrength = i687[12]
  i686.shadowResolution = i687[13]
  i686.lightmapBakeType = i687[14]
  i686.renderMode = i687[15]
  request.r(i687[16], i687[17], 0, i686, 'cookie')
  i686.cookieSize = i687[18]
  i686.shadowNearPlane = i687[19]
  i686.occlusionMaskChannel = i687[20]
  i686.isBaked = !!i687[21]
  i686.mixedLightingMode = i687[22]
  i686.enabled = !!i687[23]
  return i686
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider"] = function (request, data, root) {
  var i688 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider' )
  var i689 = data
  i688.center = new pc.Vec3( i689[0], i689[1], i689[2] )
  i688.radius = i689[3]
  i688.height = i689[4]
  i688.direction = i689[5]
  i688.enabled = !!i689[6]
  i688.isTrigger = !!i689[7]
  request.r(i689[8], i689[9], 0, i688, 'material')
  return i688
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i690 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i691 = data
  i690.mass = i691[0]
  i690.drag = i691[1]
  i690.angularDrag = i691[2]
  i690.useGravity = !!i691[3]
  i690.isKinematic = !!i691[4]
  i690.constraints = i691[5]
  i690.maxAngularVelocity = i691[6]
  i690.collisionDetectionMode = i691[7]
  i690.interpolation = i691[8]
  return i690
}

Deserializers["CharacterMovement"] = function (request, data, root) {
  var i692 = root || request.c( 'CharacterMovement' )
  var i693 = data
  request.r(i693[0], i693[1], 0, i692, 'joystick')
  request.r(i693[2], i693[3], 0, i692, 'playerCamera')
  request.r(i693[4], i693[5], 0, i692, 'targetMarker')
  i692.moveSpeed = i693[6]
  i692.rotationSpeed = i693[7]
  i692.camSwitchingTime = i693[8]
  i692.canMove = !!i693[9]
  request.r(i693[10], i693[11], 0, i692, 'playerAnimator')
  request.r(i693[12], i693[13], 0, i692, 'rb')
  return i692
}

Deserializers["Player"] = function (request, data, root) {
  var i694 = root || request.c( 'Player' )
  var i695 = data
  request.r(i695[0], i695[1], 0, i694, 'headPoint')
  i694.currentPickedBooks = i695[2]
  var i697 = i695[3]
  var i696 = []
  for(var i = 0; i < i697.length; i += 1) {
    i696.push( request.d('Player+PlayerCatchPoint', i697[i + 0]) );
  }
  i694.playerCatchPoints = i696
  i694.catchDuration = i695[4]
  i694.moveBookDuration = i695[5]
  return i694
}

Deserializers["Player+PlayerCatchPoint"] = function (request, data, root) {
  var i700 = root || request.c( 'Player+PlayerCatchPoint' )
  var i701 = data
  request.r(i701[0], i701[1], 0, i700, 'catchPoint')
  i700.isOccupied = !!i701[2]
  return i700
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer"] = function (request, data, root) {
  var i702 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer' )
  var i703 = data
  request.r(i703[0], i703[1], 0, i702, 'sharedMesh')
  var i705 = i703[2]
  var i704 = []
  for(var i = 0; i < i705.length; i += 2) {
  request.r(i705[i + 0], i705[i + 1], 2, i704, '')
  }
  i702.bones = i704
  i702.updateWhenOffscreen = !!i703[3]
  i702.localBounds = i703[4]
  request.r(i703[5], i703[6], 0, i702, 'rootBone')
  var i707 = i703[7]
  var i706 = []
  for(var i = 0; i < i707.length; i += 1) {
    i706.push( request.d('Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight', i707[i + 0]) );
  }
  i702.blendShapesWeights = i706
  i702.enabled = !!i703[8]
  request.r(i703[9], i703[10], 0, i702, 'sharedMaterial')
  var i709 = i703[11]
  var i708 = []
  for(var i = 0; i < i709.length; i += 2) {
  request.r(i709[i + 0], i709[i + 1], 2, i708, '')
  }
  i702.sharedMaterials = i708
  i702.receiveShadows = !!i703[12]
  i702.shadowCastingMode = i703[13]
  i702.sortingLayerID = i703[14]
  i702.sortingOrder = i703[15]
  i702.lightmapIndex = i703[16]
  i702.lightmapSceneIndex = i703[17]
  i702.lightmapScaleOffset = new pc.Vec4( i703[18], i703[19], i703[20], i703[21] )
  i702.lightProbeUsage = i703[22]
  i702.reflectionProbeUsage = i703[23]
  return i702
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight"] = function (request, data, root) {
  var i712 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight' )
  var i713 = data
  i712.weight = i713[0]
  return i712
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i714 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i715 = data
  request.r(i715[0], i715[1], 0, i714, 'clip')
  request.r(i715[2], i715[3], 0, i714, 'outputAudioMixerGroup')
  i714.playOnAwake = !!i715[4]
  i714.loop = !!i715[5]
  i714.time = i715[6]
  i714.volume = i715[7]
  i714.pitch = i715[8]
  i714.enabled = !!i715[9]
  return i714
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i716 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i717 = data
  i716.aspect = i717[0]
  i716.orthographic = !!i717[1]
  i716.orthographicSize = i717[2]
  i716.backgroundColor = new pc.Color(i717[3], i717[4], i717[5], i717[6])
  i716.nearClipPlane = i717[7]
  i716.farClipPlane = i717[8]
  i716.fieldOfView = i717[9]
  i716.depth = i717[10]
  i716.clearFlags = i717[11]
  i716.cullingMask = i717[12]
  i716.rect = i717[13]
  request.r(i717[14], i717[15], 0, i716, 'targetTexture')
  i716.usePhysicalProperties = !!i717[16]
  i716.focalLength = i717[17]
  i716.sensorSize = new pc.Vec2( i717[18], i717[19] )
  i716.lensShift = new pc.Vec2( i717[20], i717[21] )
  i716.gateFit = i717[22]
  i716.commandBufferCount = i717[23]
  i716.cameraType = i717[24]
  i716.enabled = !!i717[25]
  return i716
}

Deserializers["CameraFollower"] = function (request, data, root) {
  var i718 = root || request.c( 'CameraFollower' )
  var i719 = data
  i718.positionOffset = new pc.Vec3( i719[0], i719[1], i719[2] )
  i718.followSpeed = i719[3]
  request.r(i719[4], i719[5], 0, i718, 'character')
  i718.inRoomPositionOffset = new pc.Vec3( i719[6], i719[7], i719[8] )
  return i718
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i720 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i721 = data
  i720.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i721[0], i720.main)
  i720.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i721[1], i720.colorBySpeed)
  i720.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i721[2], i720.colorOverLifetime)
  i720.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i721[3], i720.emission)
  i720.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i721[4], i720.rotationBySpeed)
  i720.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i721[5], i720.rotationOverLifetime)
  i720.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i721[6], i720.shape)
  i720.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i721[7], i720.sizeBySpeed)
  i720.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i721[8], i720.sizeOverLifetime)
  i720.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i721[9], i720.textureSheetAnimation)
  i720.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i721[10], i720.velocityOverLifetime)
  i720.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i721[11], i720.noise)
  i720.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i721[12], i720.inheritVelocity)
  i720.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i721[13], i720.forceOverLifetime)
  i720.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i721[14], i720.limitVelocityOverLifetime)
  i720.useAutoRandomSeed = !!i721[15]
  i720.randomSeed = i721[16]
  return i720
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i722 = root || new pc.ParticleSystemMain()
  var i723 = data
  i722.duration = i723[0]
  i722.loop = !!i723[1]
  i722.prewarm = !!i723[2]
  i722.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i723[3], i722.startDelay)
  i722.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i723[4], i722.startLifetime)
  i722.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i723[5], i722.startSpeed)
  i722.startSize3D = !!i723[6]
  i722.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i723[7], i722.startSizeX)
  i722.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i723[8], i722.startSizeY)
  i722.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i723[9], i722.startSizeZ)
  i722.startRotation3D = !!i723[10]
  i722.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i723[11], i722.startRotationX)
  i722.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i723[12], i722.startRotationY)
  i722.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i723[13], i722.startRotationZ)
  i722.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i723[14], i722.startColor)
  i722.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i723[15], i722.gravityModifier)
  i722.simulationSpace = i723[16]
  request.r(i723[17], i723[18], 0, i722, 'customSimulationSpace')
  i722.simulationSpeed = i723[19]
  i722.useUnscaledTime = !!i723[20]
  i722.scalingMode = i723[21]
  i722.playOnAwake = !!i723[22]
  i722.maxParticles = i723[23]
  i722.emitterVelocityMode = i723[24]
  i722.stopAction = i723[25]
  return i722
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i724 = root || new pc.MinMaxCurve()
  var i725 = data
  i724.mode = i725[0]
  i724.curveMin = new pc.AnimationCurve( { keys_flow: i725[1] } )
  i724.curveMax = new pc.AnimationCurve( { keys_flow: i725[2] } )
  i724.curveMultiplier = i725[3]
  i724.constantMin = i725[4]
  i724.constantMax = i725[5]
  return i724
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i726 = root || new pc.MinMaxGradient()
  var i727 = data
  i726.mode = i727[0]
  i726.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i727[1], i726.gradientMin)
  i726.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i727[2], i726.gradientMax)
  i726.colorMin = new pc.Color(i727[3], i727[4], i727[5], i727[6])
  i726.colorMax = new pc.Color(i727[7], i727[8], i727[9], i727[10])
  return i726
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i728 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i729 = data
  i728.mode = i729[0]
  var i731 = i729[1]
  var i730 = []
  for(var i = 0; i < i731.length; i += 1) {
    i730.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i731[i + 0]) );
  }
  i728.colorKeys = i730
  var i733 = i729[2]
  var i732 = []
  for(var i = 0; i < i733.length; i += 1) {
    i732.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i733[i + 0]) );
  }
  i728.alphaKeys = i732
  return i728
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i736 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i737 = data
  i736.color = new pc.Color(i737[0], i737[1], i737[2], i737[3])
  i736.time = i737[4]
  return i736
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i740 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i741 = data
  i740.alpha = i741[0]
  i740.time = i741[1]
  return i740
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i742 = root || new pc.ParticleSystemColorBySpeed()
  var i743 = data
  i742.enabled = !!i743[0]
  i742.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i743[1], i742.color)
  i742.range = new pc.Vec2( i743[2], i743[3] )
  return i742
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i744 = root || new pc.ParticleSystemColorOverLifetime()
  var i745 = data
  i744.enabled = !!i745[0]
  i744.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i745[1], i744.color)
  return i744
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i746 = root || new pc.ParticleSystemEmitter()
  var i747 = data
  i746.enabled = !!i747[0]
  i746.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i747[1], i746.rateOverTime)
  i746.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i747[2], i746.rateOverDistance)
  var i749 = i747[3]
  var i748 = []
  for(var i = 0; i < i749.length; i += 1) {
    i748.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i749[i + 0]) );
  }
  i746.bursts = i748
  return i746
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i752 = root || new pc.ParticleSystemBurst()
  var i753 = data
  i752.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i753[0], i752.count)
  i752.cycleCount = i753[1]
  i752.minCount = i753[2]
  i752.maxCount = i753[3]
  i752.repeatInterval = i753[4]
  i752.time = i753[5]
  return i752
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i754 = root || new pc.ParticleSystemRotationBySpeed()
  var i755 = data
  i754.enabled = !!i755[0]
  i754.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i755[1], i754.x)
  i754.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i755[2], i754.y)
  i754.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i755[3], i754.z)
  i754.separateAxes = !!i755[4]
  i754.range = new pc.Vec2( i755[5], i755[6] )
  return i754
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i756 = root || new pc.ParticleSystemRotationOverLifetime()
  var i757 = data
  i756.enabled = !!i757[0]
  i756.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i757[1], i756.x)
  i756.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i757[2], i756.y)
  i756.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i757[3], i756.z)
  i756.separateAxes = !!i757[4]
  return i756
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i758 = root || new pc.ParticleSystemShape()
  var i759 = data
  i758.enabled = !!i759[0]
  i758.shapeType = i759[1]
  i758.randomDirectionAmount = i759[2]
  i758.sphericalDirectionAmount = i759[3]
  i758.randomPositionAmount = i759[4]
  i758.alignToDirection = !!i759[5]
  i758.radius = i759[6]
  i758.radiusMode = i759[7]
  i758.radiusSpread = i759[8]
  i758.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i759[9], i758.radiusSpeed)
  i758.radiusThickness = i759[10]
  i758.angle = i759[11]
  i758.length = i759[12]
  i758.boxThickness = new pc.Vec3( i759[13], i759[14], i759[15] )
  i758.meshShapeType = i759[16]
  request.r(i759[17], i759[18], 0, i758, 'mesh')
  request.r(i759[19], i759[20], 0, i758, 'meshRenderer')
  request.r(i759[21], i759[22], 0, i758, 'skinnedMeshRenderer')
  i758.useMeshMaterialIndex = !!i759[23]
  i758.meshMaterialIndex = i759[24]
  i758.useMeshColors = !!i759[25]
  i758.normalOffset = i759[26]
  i758.arc = i759[27]
  i758.arcMode = i759[28]
  i758.arcSpread = i759[29]
  i758.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i759[30], i758.arcSpeed)
  i758.donutRadius = i759[31]
  i758.position = new pc.Vec3( i759[32], i759[33], i759[34] )
  i758.rotation = new pc.Vec3( i759[35], i759[36], i759[37] )
  i758.scale = new pc.Vec3( i759[38], i759[39], i759[40] )
  return i758
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i760 = root || new pc.ParticleSystemSizeBySpeed()
  var i761 = data
  i760.enabled = !!i761[0]
  i760.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i761[1], i760.x)
  i760.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i761[2], i760.y)
  i760.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i761[3], i760.z)
  i760.separateAxes = !!i761[4]
  i760.range = new pc.Vec2( i761[5], i761[6] )
  return i760
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i762 = root || new pc.ParticleSystemSizeOverLifetime()
  var i763 = data
  i762.enabled = !!i763[0]
  i762.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i763[1], i762.x)
  i762.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i763[2], i762.y)
  i762.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i763[3], i762.z)
  i762.separateAxes = !!i763[4]
  return i762
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i764 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i765 = data
  i764.enabled = !!i765[0]
  i764.mode = i765[1]
  i764.animation = i765[2]
  i764.numTilesX = i765[3]
  i764.numTilesY = i765[4]
  i764.useRandomRow = !!i765[5]
  i764.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i765[6], i764.frameOverTime)
  i764.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i765[7], i764.startFrame)
  i764.cycleCount = i765[8]
  i764.rowIndex = i765[9]
  i764.flipU = i765[10]
  i764.flipV = i765[11]
  i764.spriteCount = i765[12]
  var i767 = i765[13]
  var i766 = []
  for(var i = 0; i < i767.length; i += 2) {
  request.r(i767[i + 0], i767[i + 1], 2, i766, '')
  }
  i764.sprites = i766
  return i764
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i770 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i771 = data
  i770.enabled = !!i771[0]
  i770.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i771[1], i770.x)
  i770.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i771[2], i770.y)
  i770.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i771[3], i770.z)
  i770.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i771[4], i770.radial)
  i770.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i771[5], i770.speedModifier)
  i770.space = i771[6]
  i770.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i771[7], i770.orbitalX)
  i770.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i771[8], i770.orbitalY)
  i770.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i771[9], i770.orbitalZ)
  i770.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i771[10], i770.orbitalOffsetX)
  i770.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i771[11], i770.orbitalOffsetY)
  i770.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i771[12], i770.orbitalOffsetZ)
  return i770
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i772 = root || new pc.ParticleSystemNoise()
  var i773 = data
  i772.enabled = !!i773[0]
  i772.separateAxes = !!i773[1]
  i772.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i773[2], i772.strengthX)
  i772.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i773[3], i772.strengthY)
  i772.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i773[4], i772.strengthZ)
  i772.frequency = i773[5]
  i772.damping = !!i773[6]
  i772.octaveCount = i773[7]
  i772.octaveMultiplier = i773[8]
  i772.octaveScale = i773[9]
  i772.quality = i773[10]
  i772.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i773[11], i772.scrollSpeed)
  i772.scrollSpeedMultiplier = i773[12]
  i772.remapEnabled = !!i773[13]
  i772.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i773[14], i772.remapX)
  i772.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i773[15], i772.remapY)
  i772.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i773[16], i772.remapZ)
  i772.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i773[17], i772.positionAmount)
  i772.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i773[18], i772.rotationAmount)
  i772.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i773[19], i772.sizeAmount)
  return i772
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i774 = root || new pc.ParticleSystemInheritVelocity()
  var i775 = data
  i774.enabled = !!i775[0]
  i774.mode = i775[1]
  i774.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i775[2], i774.curve)
  return i774
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i776 = root || new pc.ParticleSystemForceOverLifetime()
  var i777 = data
  i776.enabled = !!i777[0]
  i776.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i777[1], i776.x)
  i776.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i777[2], i776.y)
  i776.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i777[3], i776.z)
  i776.space = i777[4]
  i776.randomized = !!i777[5]
  return i776
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i778 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i779 = data
  i778.enabled = !!i779[0]
  i778.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i779[1], i778.limit)
  i778.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i779[2], i778.limitX)
  i778.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i779[3], i778.limitY)
  i778.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i779[4], i778.limitZ)
  i778.dampen = i779[5]
  i778.separateAxes = !!i779[6]
  i778.space = i779[7]
  i778.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i779[8], i778.drag)
  i778.multiplyDragByParticleSize = !!i779[9]
  i778.multiplyDragByParticleVelocity = !!i779[10]
  return i778
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i780 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i781 = data
  request.r(i781[0], i781[1], 0, i780, 'mesh')
  i780.meshCount = i781[2]
  i780.activeVertexStreamsCount = i781[3]
  i780.alignment = i781[4]
  i780.renderMode = i781[5]
  i780.sortMode = i781[6]
  i780.lengthScale = i781[7]
  i780.velocityScale = i781[8]
  i780.cameraVelocityScale = i781[9]
  i780.normalDirection = i781[10]
  i780.sortingFudge = i781[11]
  i780.minParticleSize = i781[12]
  i780.maxParticleSize = i781[13]
  i780.pivot = new pc.Vec3( i781[14], i781[15], i781[16] )
  request.r(i781[17], i781[18], 0, i780, 'trailMaterial')
  i780.applyActiveColorSpace = !!i781[19]
  i780.enabled = !!i781[20]
  request.r(i781[21], i781[22], 0, i780, 'sharedMaterial')
  var i783 = i781[23]
  var i782 = []
  for(var i = 0; i < i783.length; i += 2) {
  request.r(i783[i + 0], i783[i + 1], 2, i782, '')
  }
  i780.sharedMaterials = i782
  i780.receiveShadows = !!i781[24]
  i780.shadowCastingMode = i781[25]
  i780.sortingLayerID = i781[26]
  i780.sortingOrder = i781[27]
  i780.lightmapIndex = i781[28]
  i780.lightmapSceneIndex = i781[29]
  i780.lightmapScaleOffset = new pc.Vec4( i781[30], i781[31], i781[32], i781[33] )
  i780.lightProbeUsage = i781[34]
  i780.reflectionProbeUsage = i781[35]
  return i780
}

Deserializers["Shelf"] = function (request, data, root) {
  var i784 = root || request.c( 'Shelf' )
  var i785 = data
  var i787 = i785[0]
  var i786 = []
  for(var i = 0; i < i787.length; i += 1) {
    i786.push( request.d('Shelf+ShelfPoint', i787[i + 0]) );
  }
  i784.shelfPoints = i786
  i784.placedBooksCount = i785[1]
  request.r(i785[2], i785[3], 0, i784, 'circle')
  request.r(i785[4], i785[5], 0, i784, 'shelf_Cam')
  request.r(i785[6], i785[7], 0, i784, 'playerStandPoint')
  return i784
}

Deserializers["Shelf+ShelfPoint"] = function (request, data, root) {
  var i790 = root || request.c( 'Shelf+ShelfPoint' )
  var i791 = data
  request.r(i791[0], i791[1], 0, i790, 'point')
  i790.isOccupied = !!i791[2]
  return i790
}

Deserializers["Book"] = function (request, data, root) {
  var i792 = root || request.c( 'Book' )
  var i793 = data
  return i792
}

Deserializers["Door"] = function (request, data, root) {
  var i794 = root || request.c( 'Door' )
  var i795 = data
  request.r(i795[0], i795[1], 0, i794, 'door_Cam')
  return i794
}

Deserializers["AudioManager"] = function (request, data, root) {
  var i796 = root || request.c( 'AudioManager' )
  var i797 = data
  request.r(i797[0], i797[1], 0, i796, 'bgAS')
  request.r(i797[2], i797[3], 0, i796, 'inGameAS')
  request.r(i797[4], i797[5], 0, i796, 'PickTomato')
  request.r(i797[6], i797[7], 0, i796, 'PopTomato')
  request.r(i797[8], i797[9], 0, i796, 'checkPoint')
  request.r(i797[10], i797[11], 0, i796, 'levelComplete')
  return i796
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i798 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i799 = data
  request.r(i799[0], i799[1], 0, i798, 'm_FirstSelected')
  i798.m_sendNavigationEvents = !!i799[2]
  i798.m_DragThreshold = i799[3]
  return i798
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i800 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i801 = data
  i800.m_HorizontalAxis = i801[0]
  i800.m_VerticalAxis = i801[1]
  i800.m_SubmitButton = i801[2]
  i800.m_CancelButton = i801[3]
  i800.m_InputActionsPerSecond = i801[4]
  i800.m_RepeatDelay = i801[5]
  i800.m_ForceModuleActive = !!i801[6]
  i800.m_SendPointerHoverToParent = !!i801[7]
  return i800
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i802 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i803 = data
  i802.ambientIntensity = i803[0]
  i802.reflectionIntensity = i803[1]
  i802.ambientMode = i803[2]
  i802.ambientLight = new pc.Color(i803[3], i803[4], i803[5], i803[6])
  i802.ambientSkyColor = new pc.Color(i803[7], i803[8], i803[9], i803[10])
  i802.ambientGroundColor = new pc.Color(i803[11], i803[12], i803[13], i803[14])
  i802.ambientEquatorColor = new pc.Color(i803[15], i803[16], i803[17], i803[18])
  i802.fogColor = new pc.Color(i803[19], i803[20], i803[21], i803[22])
  i802.fogEndDistance = i803[23]
  i802.fogStartDistance = i803[24]
  i802.fogDensity = i803[25]
  i802.fog = !!i803[26]
  request.r(i803[27], i803[28], 0, i802, 'skybox')
  i802.fogMode = i803[29]
  var i805 = i803[30]
  var i804 = []
  for(var i = 0; i < i805.length; i += 1) {
    i804.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i805[i + 0]) );
  }
  i802.lightmaps = i804
  i802.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i803[31], i802.lightProbes)
  i802.lightmapsMode = i803[32]
  i802.mixedBakeMode = i803[33]
  i802.environmentLightingMode = i803[34]
  i802.ambientProbe = new pc.SphericalHarmonicsL2(i803[35])
  request.r(i803[36], i803[37], 0, i802, 'customReflection')
  request.r(i803[38], i803[39], 0, i802, 'defaultReflection')
  i802.defaultReflectionMode = i803[40]
  i802.defaultReflectionResolution = i803[41]
  i802.sunLightObjectId = i803[42]
  i802.pixelLightCount = i803[43]
  i802.defaultReflectionHDR = !!i803[44]
  i802.hasLightDataAsset = !!i803[45]
  i802.hasManualGenerate = !!i803[46]
  return i802
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i808 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i809 = data
  request.r(i809[0], i809[1], 0, i808, 'lightmapColor')
  request.r(i809[2], i809[3], 0, i808, 'lightmapDirection')
  request.r(i809[4], i809[5], 0, i808, 'shadowMask')
  return i808
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i810 = root || new UnityEngine.LightProbes()
  var i811 = data
  return i810
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i818 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i819 = data
  var i821 = i819[0]
  var i820 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i821.length; i += 1) {
    i820.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i821[i + 0]));
  }
  i818.ShaderCompilationErrors = i820
  i818.name = i819[1]
  i818.guid = i819[2]
  var i823 = i819[3]
  var i822 = []
  for(var i = 0; i < i823.length; i += 1) {
    i822.push( i823[i + 0] );
  }
  i818.shaderDefinedKeywords = i822
  var i825 = i819[4]
  var i824 = []
  for(var i = 0; i < i825.length; i += 1) {
    i824.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i825[i + 0]) );
  }
  i818.passes = i824
  var i827 = i819[5]
  var i826 = []
  for(var i = 0; i < i827.length; i += 1) {
    i826.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i827[i + 0]) );
  }
  i818.usePasses = i826
  var i829 = i819[6]
  var i828 = []
  for(var i = 0; i < i829.length; i += 1) {
    i828.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i829[i + 0]) );
  }
  i818.defaultParameterValues = i828
  request.r(i819[7], i819[8], 0, i818, 'unityFallbackShader')
  i818.readDepth = !!i819[9]
  i818.hasDepthOnlyPass = !!i819[10]
  i818.isCreatedByShaderGraph = !!i819[11]
  i818.disableBatching = !!i819[12]
  i818.compiled = !!i819[13]
  return i818
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i832 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i833 = data
  i832.shaderName = i833[0]
  i832.errorMessage = i833[1]
  return i832
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i838 = root || new pc.UnityShaderPass()
  var i839 = data
  i838.id = i839[0]
  i838.subShaderIndex = i839[1]
  i838.name = i839[2]
  i838.passType = i839[3]
  i838.grabPassTextureName = i839[4]
  i838.usePass = !!i839[5]
  i838.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i839[6], i838.zTest)
  i838.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i839[7], i838.zWrite)
  i838.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i839[8], i838.culling)
  i838.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i839[9], i838.blending)
  i838.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i839[10], i838.alphaBlending)
  i838.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i839[11], i838.colorWriteMask)
  i838.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i839[12], i838.offsetUnits)
  i838.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i839[13], i838.offsetFactor)
  i838.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i839[14], i838.stencilRef)
  i838.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i839[15], i838.stencilReadMask)
  i838.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i839[16], i838.stencilWriteMask)
  i838.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i839[17], i838.stencilOp)
  i838.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i839[18], i838.stencilOpFront)
  i838.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i839[19], i838.stencilOpBack)
  var i841 = i839[20]
  var i840 = []
  for(var i = 0; i < i841.length; i += 1) {
    i840.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i841[i + 0]) );
  }
  i838.tags = i840
  var i843 = i839[21]
  var i842 = []
  for(var i = 0; i < i843.length; i += 1) {
    i842.push( i843[i + 0] );
  }
  i838.passDefinedKeywords = i842
  var i845 = i839[22]
  var i844 = []
  for(var i = 0; i < i845.length; i += 1) {
    i844.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i845[i + 0]) );
  }
  i838.passDefinedKeywordGroups = i844
  var i847 = i839[23]
  var i846 = []
  for(var i = 0; i < i847.length; i += 1) {
    i846.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i847[i + 0]) );
  }
  i838.variants = i846
  var i849 = i839[24]
  var i848 = []
  for(var i = 0; i < i849.length; i += 1) {
    i848.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i849[i + 0]) );
  }
  i838.excludedVariants = i848
  i838.hasDepthReader = !!i839[25]
  return i838
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i850 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i851 = data
  i850.val = i851[0]
  i850.name = i851[1]
  return i850
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i852 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i853 = data
  i852.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i853[0], i852.src)
  i852.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i853[1], i852.dst)
  i852.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i853[2], i852.op)
  return i852
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i854 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i855 = data
  i854.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i855[0], i854.pass)
  i854.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i855[1], i854.fail)
  i854.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i855[2], i854.zFail)
  i854.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i855[3], i854.comp)
  return i854
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i858 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i859 = data
  i858.name = i859[0]
  i858.value = i859[1]
  return i858
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i862 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i863 = data
  var i865 = i863[0]
  var i864 = []
  for(var i = 0; i < i865.length; i += 1) {
    i864.push( i865[i + 0] );
  }
  i862.keywords = i864
  i862.hasDiscard = !!i863[1]
  return i862
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i868 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i869 = data
  i868.passId = i869[0]
  i868.subShaderIndex = i869[1]
  var i871 = i869[2]
  var i870 = []
  for(var i = 0; i < i871.length; i += 1) {
    i870.push( i871[i + 0] );
  }
  i868.keywords = i870
  i868.vertexProgram = i869[3]
  i868.fragmentProgram = i869[4]
  i868.exportedForWebGl2 = !!i869[5]
  i868.readDepth = !!i869[6]
  return i868
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i874 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i875 = data
  request.r(i875[0], i875[1], 0, i874, 'shader')
  i874.pass = i875[2]
  return i874
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i878 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i879 = data
  i878.name = i879[0]
  i878.type = i879[1]
  i878.value = new pc.Vec4( i879[2], i879[3], i879[4], i879[5] )
  i878.textureValue = i879[6]
  i878.shaderPropertyFlag = i879[7]
  return i878
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i880 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i881 = data
  i880.name = i881[0]
  request.r(i881[1], i881[2], 0, i880, 'texture')
  i880.aabb = i881[3]
  i880.vertices = i881[4]
  i880.triangles = i881[5]
  i880.textureRect = UnityEngine.Rect.MinMaxRect(i881[6], i881[7], i881[8], i881[9])
  i880.packedRect = UnityEngine.Rect.MinMaxRect(i881[10], i881[11], i881[12], i881[13])
  i880.border = new pc.Vec4( i881[14], i881[15], i881[16], i881[17] )
  i880.transparency = i881[18]
  i880.bounds = i881[19]
  i880.pixelsPerUnit = i881[20]
  i880.textureWidth = i881[21]
  i880.textureHeight = i881[22]
  i880.nativeSize = new pc.Vec2( i881[23], i881[24] )
  i880.pivot = new pc.Vec2( i881[25], i881[26] )
  i880.textureRectOffset = new pc.Vec2( i881[27], i881[28] )
  return i880
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i882 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i883 = data
  i882.name = i883[0]
  return i882
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i884 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i885 = data
  i884.name = i885[0]
  i884.wrapMode = i885[1]
  i884.isLooping = !!i885[2]
  i884.length = i885[3]
  var i887 = i885[4]
  var i886 = []
  for(var i = 0; i < i887.length; i += 1) {
    i886.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i887[i + 0]) );
  }
  i884.curves = i886
  var i889 = i885[5]
  var i888 = []
  for(var i = 0; i < i889.length; i += 1) {
    i888.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i889[i + 0]) );
  }
  i884.events = i888
  i884.halfPrecision = !!i885[6]
  i884._frameRate = i885[7]
  i884.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i885[8], i884.localBounds)
  i884.hasMuscleCurves = !!i885[9]
  var i891 = i885[10]
  var i890 = []
  for(var i = 0; i < i891.length; i += 1) {
    i890.push( i891[i + 0] );
  }
  i884.clipMuscleConstant = i890
  i884.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i885[11], i884.clipBindingConstant)
  return i884
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i894 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i895 = data
  i894.path = i895[0]
  i894.hash = i895[1]
  i894.componentType = i895[2]
  i894.property = i895[3]
  i894.keys = i895[4]
  var i897 = i895[5]
  var i896 = []
  for(var i = 0; i < i897.length; i += 1) {
    i896.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i897[i + 0]) );
  }
  i894.objectReferenceKeys = i896
  return i894
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i900 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i901 = data
  i900.time = i901[0]
  request.r(i901[1], i901[2], 0, i900, 'value')
  return i900
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i904 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i905 = data
  i904.functionName = i905[0]
  i904.floatParameter = i905[1]
  i904.intParameter = i905[2]
  i904.stringParameter = i905[3]
  request.r(i905[4], i905[5], 0, i904, 'objectReferenceParameter')
  i904.time = i905[6]
  return i904
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i906 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i907 = data
  i906.center = new pc.Vec3( i907[0], i907[1], i907[2] )
  i906.extends = new pc.Vec3( i907[3], i907[4], i907[5] )
  return i906
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i910 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i911 = data
  var i913 = i911[0]
  var i912 = []
  for(var i = 0; i < i913.length; i += 1) {
    i912.push( i913[i + 0] );
  }
  i910.genericBindings = i912
  var i915 = i911[1]
  var i914 = []
  for(var i = 0; i < i915.length; i += 1) {
    i914.push( i915[i + 0] );
  }
  i910.pptrCurveMapping = i914
  return i910
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i916 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i917 = data
  i916.name = i917[0]
  i916.ascent = i917[1]
  i916.originalLineHeight = i917[2]
  i916.fontSize = i917[3]
  var i919 = i917[4]
  var i918 = []
  for(var i = 0; i < i919.length; i += 1) {
    i918.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i919[i + 0]) );
  }
  i916.characterInfo = i918
  request.r(i917[5], i917[6], 0, i916, 'texture')
  i916.originalFontSize = i917[7]
  return i916
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i922 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i923 = data
  i922.index = i923[0]
  i922.advance = i923[1]
  i922.bearing = i923[2]
  i922.glyphWidth = i923[3]
  i922.glyphHeight = i923[4]
  i922.minX = i923[5]
  i922.maxX = i923[6]
  i922.minY = i923[7]
  i922.maxY = i923[8]
  i922.uvBottomLeftX = i923[9]
  i922.uvBottomLeftY = i923[10]
  i922.uvBottomRightX = i923[11]
  i922.uvBottomRightY = i923[12]
  i922.uvTopLeftX = i923[13]
  i922.uvTopLeftY = i923[14]
  i922.uvTopRightX = i923[15]
  i922.uvTopRightY = i923[16]
  return i922
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i924 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i925 = data
  i924.name = i925[0]
  var i927 = i925[1]
  var i926 = []
  for(var i = 0; i < i927.length; i += 1) {
    i926.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i927[i + 0]) );
  }
  i924.layers = i926
  var i929 = i925[2]
  var i928 = []
  for(var i = 0; i < i929.length; i += 1) {
    i928.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i929[i + 0]) );
  }
  i924.parameters = i928
  i924.animationClips = i925[3]
  i924.avatarUnsupported = i925[4]
  return i924
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i932 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i933 = data
  i932.name = i933[0]
  i932.defaultWeight = i933[1]
  i932.blendingMode = i933[2]
  i932.avatarMask = i933[3]
  i932.syncedLayerIndex = i933[4]
  i932.syncedLayerAffectsTiming = !!i933[5]
  i932.syncedLayers = i933[6]
  i932.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i933[7], i932.stateMachine)
  return i932
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i934 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i935 = data
  i934.id = i935[0]
  i934.name = i935[1]
  i934.path = i935[2]
  var i937 = i935[3]
  var i936 = []
  for(var i = 0; i < i937.length; i += 1) {
    i936.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i937[i + 0]) );
  }
  i934.states = i936
  var i939 = i935[4]
  var i938 = []
  for(var i = 0; i < i939.length; i += 1) {
    i938.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i939[i + 0]) );
  }
  i934.machines = i938
  var i941 = i935[5]
  var i940 = []
  for(var i = 0; i < i941.length; i += 1) {
    i940.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i941[i + 0]) );
  }
  i934.entryStateTransitions = i940
  var i943 = i935[6]
  var i942 = []
  for(var i = 0; i < i943.length; i += 1) {
    i942.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i943[i + 0]) );
  }
  i934.exitStateTransitions = i942
  var i945 = i935[7]
  var i944 = []
  for(var i = 0; i < i945.length; i += 1) {
    i944.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i945[i + 0]) );
  }
  i934.anyStateTransitions = i944
  i934.defaultStateId = i935[8]
  return i934
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i948 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i949 = data
  i948.id = i949[0]
  i948.name = i949[1]
  i948.cycleOffset = i949[2]
  i948.cycleOffsetParameter = i949[3]
  i948.cycleOffsetParameterActive = !!i949[4]
  i948.mirror = !!i949[5]
  i948.mirrorParameter = i949[6]
  i948.mirrorParameterActive = !!i949[7]
  i948.motionId = i949[8]
  i948.nameHash = i949[9]
  i948.fullPathHash = i949[10]
  i948.speed = i949[11]
  i948.speedParameter = i949[12]
  i948.speedParameterActive = !!i949[13]
  i948.tag = i949[14]
  i948.tagHash = i949[15]
  i948.writeDefaultValues = !!i949[16]
  var i951 = i949[17]
  var i950 = []
  for(var i = 0; i < i951.length; i += 2) {
  request.r(i951[i + 0], i951[i + 1], 2, i950, '')
  }
  i948.behaviours = i950
  var i953 = i949[18]
  var i952 = []
  for(var i = 0; i < i953.length; i += 1) {
    i952.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i953[i + 0]) );
  }
  i948.transitions = i952
  return i948
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i958 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i959 = data
  i958.fullPath = i959[0]
  i958.canTransitionToSelf = !!i959[1]
  i958.duration = i959[2]
  i958.exitTime = i959[3]
  i958.hasExitTime = !!i959[4]
  i958.hasFixedDuration = !!i959[5]
  i958.interruptionSource = i959[6]
  i958.offset = i959[7]
  i958.orderedInterruption = !!i959[8]
  i958.destinationStateId = i959[9]
  i958.isExit = !!i959[10]
  i958.mute = !!i959[11]
  i958.solo = !!i959[12]
  var i961 = i959[13]
  var i960 = []
  for(var i = 0; i < i961.length; i += 1) {
    i960.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i961[i + 0]) );
  }
  i958.conditions = i960
  return i958
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i964 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i965 = data
  i964.mode = i965[0]
  i964.parameter = i965[1]
  i964.threshold = i965[2]
  return i964
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i970 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i971 = data
  i970.destinationStateId = i971[0]
  i970.isExit = !!i971[1]
  i970.mute = !!i971[2]
  i970.solo = !!i971[3]
  var i973 = i971[4]
  var i972 = []
  for(var i = 0; i < i973.length; i += 1) {
    i972.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i973[i + 0]) );
  }
  i970.conditions = i972
  return i970
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i976 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i977 = data
  i976.defaultBool = !!i977[0]
  i976.defaultFloat = i977[1]
  i976.defaultInt = i977[2]
  i976.name = i977[3]
  i976.nameHash = i977[4]
  i976.type = i977[5]
  return i976
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i978 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i979 = data
  var i981 = i979[0]
  var i980 = []
  for(var i = 0; i < i981.length; i += 1) {
    i980.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i981[i + 0]) );
  }
  i978.files = i980
  i978.componentToPrefabIds = i979[1]
  return i978
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i984 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i985 = data
  i984.path = i985[0]
  request.r(i985[1], i985[2], 0, i984, 'unityObject')
  return i984
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i986 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i987 = data
  var i989 = i987[0]
  var i988 = []
  for(var i = 0; i < i989.length; i += 1) {
    i988.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i989[i + 0]) );
  }
  i986.scriptsExecutionOrder = i988
  var i991 = i987[1]
  var i990 = []
  for(var i = 0; i < i991.length; i += 1) {
    i990.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i991[i + 0]) );
  }
  i986.sortingLayers = i990
  var i993 = i987[2]
  var i992 = []
  for(var i = 0; i < i993.length; i += 1) {
    i992.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i993[i + 0]) );
  }
  i986.cullingLayers = i992
  i986.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i987[3], i986.timeSettings)
  i986.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i987[4], i986.physicsSettings)
  i986.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i987[5], i986.physics2DSettings)
  i986.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i987[6], i986.qualitySettings)
  i986.enableRealtimeShadows = !!i987[7]
  i986.enableAutoInstancing = !!i987[8]
  i986.enableStaticBatching = !!i987[9]
  i986.enableDynamicBatching = !!i987[10]
  i986.usePreservativeDynamicBatching = !!i987[11]
  i986.lightmapEncodingQuality = i987[12]
  i986.desiredColorSpace = i987[13]
  var i995 = i987[14]
  var i994 = []
  for(var i = 0; i < i995.length; i += 1) {
    i994.push( i995[i + 0] );
  }
  i986.allTags = i994
  return i986
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i998 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i999 = data
  i998.name = i999[0]
  i998.value = i999[1]
  return i998
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1002 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1003 = data
  i1002.id = i1003[0]
  i1002.name = i1003[1]
  i1002.value = i1003[2]
  return i1002
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1006 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1007 = data
  i1006.id = i1007[0]
  i1006.name = i1007[1]
  return i1006
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1008 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1009 = data
  i1008.fixedDeltaTime = i1009[0]
  i1008.maximumDeltaTime = i1009[1]
  i1008.timeScale = i1009[2]
  i1008.maximumParticleTimestep = i1009[3]
  return i1008
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1010 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1011 = data
  i1010.gravity = new pc.Vec3( i1011[0], i1011[1], i1011[2] )
  i1010.defaultSolverIterations = i1011[3]
  i1010.bounceThreshold = i1011[4]
  i1010.autoSyncTransforms = !!i1011[5]
  i1010.autoSimulation = !!i1011[6]
  var i1013 = i1011[7]
  var i1012 = []
  for(var i = 0; i < i1013.length; i += 1) {
    i1012.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1013[i + 0]) );
  }
  i1010.collisionMatrix = i1012
  return i1010
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1016 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1017 = data
  i1016.enabled = !!i1017[0]
  i1016.layerId = i1017[1]
  i1016.otherLayerId = i1017[2]
  return i1016
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1018 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1019 = data
  request.r(i1019[0], i1019[1], 0, i1018, 'material')
  i1018.gravity = new pc.Vec2( i1019[2], i1019[3] )
  i1018.positionIterations = i1019[4]
  i1018.velocityIterations = i1019[5]
  i1018.velocityThreshold = i1019[6]
  i1018.maxLinearCorrection = i1019[7]
  i1018.maxAngularCorrection = i1019[8]
  i1018.maxTranslationSpeed = i1019[9]
  i1018.maxRotationSpeed = i1019[10]
  i1018.baumgarteScale = i1019[11]
  i1018.baumgarteTOIScale = i1019[12]
  i1018.timeToSleep = i1019[13]
  i1018.linearSleepTolerance = i1019[14]
  i1018.angularSleepTolerance = i1019[15]
  i1018.defaultContactOffset = i1019[16]
  i1018.autoSimulation = !!i1019[17]
  i1018.queriesHitTriggers = !!i1019[18]
  i1018.queriesStartInColliders = !!i1019[19]
  i1018.callbacksOnDisable = !!i1019[20]
  i1018.reuseCollisionCallbacks = !!i1019[21]
  i1018.autoSyncTransforms = !!i1019[22]
  var i1021 = i1019[23]
  var i1020 = []
  for(var i = 0; i < i1021.length; i += 1) {
    i1020.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1021[i + 0]) );
  }
  i1018.collisionMatrix = i1020
  return i1018
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1024 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1025 = data
  i1024.enabled = !!i1025[0]
  i1024.layerId = i1025[1]
  i1024.otherLayerId = i1025[2]
  return i1024
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1026 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1027 = data
  var i1029 = i1027[0]
  var i1028 = []
  for(var i = 0; i < i1029.length; i += 1) {
    i1028.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1029[i + 0]) );
  }
  i1026.qualityLevels = i1028
  var i1031 = i1027[1]
  var i1030 = []
  for(var i = 0; i < i1031.length; i += 1) {
    i1030.push( i1031[i + 0] );
  }
  i1026.names = i1030
  i1026.shadows = i1027[2]
  i1026.anisotropicFiltering = i1027[3]
  i1026.antiAliasing = i1027[4]
  i1026.lodBias = i1027[5]
  i1026.shadowCascades = i1027[6]
  i1026.shadowDistance = i1027[7]
  i1026.shadowmaskMode = i1027[8]
  i1026.shadowProjection = i1027[9]
  i1026.shadowResolution = i1027[10]
  i1026.softParticles = !!i1027[11]
  i1026.softVegetation = !!i1027[12]
  i1026.activeColorSpace = i1027[13]
  i1026.desiredColorSpace = i1027[14]
  i1026.masterTextureLimit = i1027[15]
  i1026.maxQueuedFrames = i1027[16]
  i1026.particleRaycastBudget = i1027[17]
  i1026.pixelLightCount = i1027[18]
  i1026.realtimeReflectionProbes = !!i1027[19]
  i1026.shadowCascade2Split = i1027[20]
  i1026.shadowCascade4Split = new pc.Vec3( i1027[21], i1027[22], i1027[23] )
  i1026.streamingMipmapsActive = !!i1027[24]
  i1026.vSyncCount = i1027[25]
  i1026.asyncUploadBufferSize = i1027[26]
  i1026.asyncUploadTimeSlice = i1027[27]
  i1026.billboardsFaceCameraPosition = !!i1027[28]
  i1026.shadowNearPlaneOffset = i1027[29]
  i1026.streamingMipmapsMemoryBudget = i1027[30]
  i1026.maximumLODLevel = i1027[31]
  i1026.streamingMipmapsAddAllCameras = !!i1027[32]
  i1026.streamingMipmapsMaxLevelReduction = i1027[33]
  i1026.streamingMipmapsRenderersPerFrame = i1027[34]
  i1026.resolutionScalingFixedDPIFactor = i1027[35]
  i1026.streamingMipmapsMaxFileIORequests = i1027[36]
  i1026.currentQualityLevel = i1027[37]
  return i1026
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar"] = function (request, data, root) {
  var i1034 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar' )
  var i1035 = data
  i1034.name = i1035[0]
  var i1037 = i1035[1]
  var i1036 = []
  for(var i = 0; i < i1037.length; i += 1) {
    i1036.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair', i1037[i + 0]) );
  }
  i1034.tos = i1036
  var i1039 = i1035[2]
  var i1038 = []
  for(var i = 0; i < i1039.length; i += 1) {
    i1038.push( i1039[i + 0] );
  }
  i1034.constant = i1038
  i1034.isValid = !!i1035[3]
  i1034.isHuman = !!i1035[4]
  i1034.hasRootMotion = !!i1035[5]
  return i1034
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair"] = function (request, data, root) {
  var i1042 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair' )
  var i1043 = data
  i1042.hash = i1043[0]
  i1042.path = i1043[1]
  return i1042
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1046 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1047 = data
  i1046.weight = i1047[0]
  i1046.vertices = i1047[1]
  i1046.normals = i1047[2]
  i1046.tangents = i1047[3]
  return i1046
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Light":{"type":0,"color":1,"cullingMask":5,"intensity":6,"range":7,"spotAngle":8,"shadows":9,"shadowNormalBias":10,"shadowBias":11,"shadowStrength":12,"shadowResolution":13,"lightmapBakeType":14,"renderMode":15,"cookie":16,"cookieSize":18,"shadowNearPlane":19,"occlusionMaskChannel":20,"isBaked":21,"mixedLightingMode":22,"enabled":23},"Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider":{"center":0,"radius":3,"height":4,"direction":5,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody":{"mass":0,"drag":1,"angularDrag":2,"useGravity":3,"isKinematic":4,"constraints":5,"maxAngularVelocity":6,"collisionDetectionMode":7,"interpolation":8},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer":{"sharedMesh":0,"bones":2,"updateWhenOffscreen":3,"localBounds":4,"rootBone":5,"blendShapesWeights":7,"enabled":8,"sharedMaterial":9,"sharedMaterials":11,"receiveShadows":12,"shadowCastingMode":13,"sortingLayerID":14,"sortingOrder":15,"lightmapIndex":16,"lightmapSceneIndex":17,"lightmapScaleOffset":18,"lightProbeUsage":22,"reflectionProbeUsage":23},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight":{"weight":0},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar":{"name":0,"tos":1,"constant":2,"isValid":3,"isHuman":4,"hasRootMotion":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair":{"hash":0,"path":1},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"48":[49],"50":[49],"51":[49],"52":[49],"53":[49],"54":[49],"55":[35],"56":[37],"57":[30],"58":[30],"59":[30],"60":[30],"61":[30],"62":[30],"63":[64],"65":[64],"66":[64],"67":[64],"68":[64],"69":[64],"70":[64],"71":[64],"72":[64],"73":[64],"74":[64],"75":[64],"76":[64],"77":[37],"78":[3],"79":[80],"81":[80],"9":[8],"82":[8],"83":[17,8],"84":[3],"85":[17,8],"86":[8],"87":[8],"88":[3,8],"89":[8,17],"90":[91],"92":[91],"93":[91],"94":[8],"95":[8],"12":[9],"20":[17,8],"96":[8],"11":[9],"97":[8],"98":[8],"99":[8],"100":[8],"101":[8],"102":[8],"103":[8],"104":[8],"105":[8],"106":[17,8],"107":[8],"108":[8],"109":[8],"110":[8],"16":[17,8],"111":[8],"112":[45],"113":[45],"46":[45],"114":[45],"115":[37],"116":[37]}

Deserializers.types = ["UnityEngine.Transform","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","UnityEngine.Material","UnityEngine.BoxCollider","UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.MonoBehaviour","UIManager","UnityEngine.GameObject","UnityEngine.UI.Text","UnityEngine.CanvasRenderer","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","UnityEngine.UI.Image","UnityEngine.Sprite","UnityEngine.Font","PlayableDynamicJoystick","UnityEngine.UI.Button","UnityEngine.UI.Outline","GameController","Shelf","UnityEngine.Light","UnityEngine.CapsuleCollider","UnityEngine.Rigidbody","UnityEngine.Avatar","CharacterMovement","CameraFollower","Player","UnityEngine.SkinnedMeshRenderer","UnityEngine.AudioSource","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","Book","Door","AudioManager","UnityEngine.AudioClip","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.Cubemap","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.ScrollRect","UnityEngine.UI.Scrollbar","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.81f1";

Deserializers.productName = "Library_Ad";

Deserializers.lunaInitializationTime = "08/12/2026 02:04:01";

Deserializers.lunaDaysRunning = "5.3";

Deserializers.lunaVersion = "7.2.0";

Deserializers.lunaSHA = "ea08d29afe2968efcb8d91d5624f033c6485cc68";

Deserializers.creativeName = "Library_Final_Ad";

Deserializers.lunaAppID = "41719";

Deserializers.projectId = "bd826f3895869644c9c3079f3a001426";

Deserializers.packagesInfo = "com.unity.ugui: 2.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "False";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "False";

Deserializers.runtimeAnalysisExcludedClassesCount = "0";

Deserializers.runtimeAnalysisExcludedMethodsCount = "0";

Deserializers.runtimeAnalysisExcludedModules = "";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "StandaloneWindows64";

Deserializers.applicationIdentifier = "com.DefaultCompany.3D-Project";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 24;

Deserializers.linearColorSpace = true;

Deserializers.buildID = "6b050378-aca8-40ec-a051-f0296a64bdb6";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

