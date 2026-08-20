var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i2610 = root || request.c( 'UnityEngine.JointSpring' )
  var i2611 = data
  i2610.spring = i2611[0]
  i2610.damper = i2611[1]
  i2610.targetPosition = i2611[2]
  return i2610
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i2612 = root || request.c( 'UnityEngine.JointMotor' )
  var i2613 = data
  i2612.m_TargetVelocity = i2613[0]
  i2612.m_Force = i2613[1]
  i2612.m_FreeSpin = i2613[2]
  return i2612
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i2614 = root || request.c( 'UnityEngine.JointLimits' )
  var i2615 = data
  i2614.m_Min = i2615[0]
  i2614.m_Max = i2615[1]
  i2614.m_Bounciness = i2615[2]
  i2614.m_BounceMinVelocity = i2615[3]
  i2614.m_ContactDistance = i2615[4]
  i2614.minBounce = i2615[5]
  i2614.maxBounce = i2615[6]
  return i2614
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i2616 = root || request.c( 'UnityEngine.JointDrive' )
  var i2617 = data
  i2616.m_PositionSpring = i2617[0]
  i2616.m_PositionDamper = i2617[1]
  i2616.m_MaximumForce = i2617[2]
  i2616.m_UseAcceleration = i2617[3]
  return i2616
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i2618 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i2619 = data
  i2618.m_Spring = i2619[0]
  i2618.m_Damper = i2619[1]
  return i2618
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i2620 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i2621 = data
  i2620.m_Limit = i2621[0]
  i2620.m_Bounciness = i2621[1]
  i2620.m_ContactDistance = i2621[2]
  return i2620
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i2622 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i2623 = data
  i2622.m_ExtremumSlip = i2623[0]
  i2622.m_ExtremumValue = i2623[1]
  i2622.m_AsymptoteSlip = i2623[2]
  i2622.m_AsymptoteValue = i2623[3]
  i2622.m_Stiffness = i2623[4]
  return i2622
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i2624 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i2625 = data
  i2624.m_LowerAngle = i2625[0]
  i2624.m_UpperAngle = i2625[1]
  return i2624
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i2626 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i2627 = data
  i2626.m_MotorSpeed = i2627[0]
  i2626.m_MaximumMotorTorque = i2627[1]
  return i2626
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i2628 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i2629 = data
  i2628.m_DampingRatio = i2629[0]
  i2628.m_Frequency = i2629[1]
  i2628.m_Angle = i2629[2]
  return i2628
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i2630 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i2631 = data
  i2630.m_LowerTranslation = i2631[0]
  i2630.m_UpperTranslation = i2631[1]
  return i2630
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i2632 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i2633 = data
  i2632.name = i2633[0]
  i2632.halfPrecision = !!i2633[1]
  i2632.useSimplification = !!i2633[2]
  i2632.useUInt32IndexFormat = !!i2633[3]
  i2632.vertexCount = i2633[4]
  i2632.aabb = i2633[5]
  var i2635 = i2633[6]
  var i2634 = []
  for(var i = 0; i < i2635.length; i += 1) {
    i2634.push( !!i2635[i + 0] );
  }
  i2632.streams = i2634
  i2632.vertices = i2633[7]
  var i2637 = i2633[8]
  var i2636 = []
  for(var i = 0; i < i2637.length; i += 1) {
    i2636.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i2637[i + 0]) );
  }
  i2632.subMeshes = i2636
  var i2639 = i2633[9]
  var i2638 = []
  for(var i = 0; i < i2639.length; i += 16) {
    i2638.push( new pc.Mat4().setData(i2639[i + 0], i2639[i + 1], i2639[i + 2], i2639[i + 3],  i2639[i + 4], i2639[i + 5], i2639[i + 6], i2639[i + 7],  i2639[i + 8], i2639[i + 9], i2639[i + 10], i2639[i + 11],  i2639[i + 12], i2639[i + 13], i2639[i + 14], i2639[i + 15]) );
  }
  i2632.bindposes = i2638
  var i2641 = i2633[10]
  var i2640 = []
  for(var i = 0; i < i2641.length; i += 1) {
    i2640.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i2641[i + 0]) );
  }
  i2632.blendShapes = i2640
  return i2632
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i2646 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i2647 = data
  i2646.triangles = i2647[0]
  return i2646
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i2652 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i2653 = data
  i2652.name = i2653[0]
  var i2655 = i2653[1]
  var i2654 = []
  for(var i = 0; i < i2655.length; i += 1) {
    i2654.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i2655[i + 0]) );
  }
  i2652.frames = i2654
  return i2652
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i2656 = root || new pc.UnityMaterial()
  var i2657 = data
  i2656.name = i2657[0]
  request.r(i2657[1], i2657[2], 0, i2656, 'shader')
  i2656.renderQueue = i2657[3]
  i2656.enableInstancing = !!i2657[4]
  var i2659 = i2657[5]
  var i2658 = []
  for(var i = 0; i < i2659.length; i += 1) {
    i2658.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i2659[i + 0]) );
  }
  i2656.floatParameters = i2658
  var i2661 = i2657[6]
  var i2660 = []
  for(var i = 0; i < i2661.length; i += 1) {
    i2660.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i2661[i + 0]) );
  }
  i2656.colorParameters = i2660
  var i2663 = i2657[7]
  var i2662 = []
  for(var i = 0; i < i2663.length; i += 1) {
    i2662.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i2663[i + 0]) );
  }
  i2656.vectorParameters = i2662
  var i2665 = i2657[8]
  var i2664 = []
  for(var i = 0; i < i2665.length; i += 1) {
    i2664.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i2665[i + 0]) );
  }
  i2656.textureParameters = i2664
  var i2667 = i2657[9]
  var i2666 = []
  for(var i = 0; i < i2667.length; i += 1) {
    i2666.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i2667[i + 0]) );
  }
  i2656.materialFlags = i2666
  return i2656
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i2670 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i2671 = data
  i2670.name = i2671[0]
  i2670.value = i2671[1]
  return i2670
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i2674 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i2675 = data
  i2674.name = i2675[0]
  i2674.value = new pc.Color(i2675[1], i2675[2], i2675[3], i2675[4])
  return i2674
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i2678 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i2679 = data
  i2678.name = i2679[0]
  i2678.value = new pc.Vec4( i2679[1], i2679[2], i2679[3], i2679[4] )
  return i2678
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i2682 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i2683 = data
  i2682.name = i2683[0]
  request.r(i2683[1], i2683[2], 0, i2682, 'value')
  return i2682
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i2686 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i2687 = data
  i2686.name = i2687[0]
  i2686.enabled = !!i2687[1]
  return i2686
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i2688 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i2689 = data
  i2688.name = i2689[0]
  i2688.width = i2689[1]
  i2688.height = i2689[2]
  i2688.mipmapCount = i2689[3]
  i2688.anisoLevel = i2689[4]
  i2688.filterMode = i2689[5]
  i2688.hdr = !!i2689[6]
  i2688.format = i2689[7]
  i2688.wrapMode = i2689[8]
  i2688.alphaIsTransparency = !!i2689[9]
  i2688.alphaSource = i2689[10]
  i2688.graphicsFormat = i2689[11]
  i2688.sRGBTexture = !!i2689[12]
  i2688.desiredColorSpace = i2689[13]
  i2688.wrapU = i2689[14]
  i2688.wrapV = i2689[15]
  return i2688
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i2690 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i2691 = data
  i2690.name = i2691[0]
  i2690.atlasId = i2691[1]
  i2690.mipmapCount = i2691[2]
  i2690.hdr = !!i2691[3]
  i2690.size = i2691[4]
  i2690.anisoLevel = i2691[5]
  i2690.filterMode = i2691[6]
  var i2693 = i2691[7]
  var i2692 = []
  for(var i = 0; i < i2693.length; i += 4) {
    i2692.push( UnityEngine.Rect.MinMaxRect(i2693[i + 0], i2693[i + 1], i2693[i + 2], i2693[i + 3]) );
  }
  i2690.rects = i2692
  i2690.wrapU = i2691[8]
  i2690.wrapV = i2691[9]
  return i2690
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i2696 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i2697 = data
  i2696.name = i2697[0]
  i2696.index = i2697[1]
  i2696.startup = !!i2697[2]
  return i2696
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i2698 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i2699 = data
  i2698.type = i2699[0]
  i2698.color = new pc.Color(i2699[1], i2699[2], i2699[3], i2699[4])
  i2698.cullingMask = i2699[5]
  i2698.intensity = i2699[6]
  i2698.range = i2699[7]
  i2698.spotAngle = i2699[8]
  i2698.shadows = i2699[9]
  i2698.shadowNormalBias = i2699[10]
  i2698.shadowBias = i2699[11]
  i2698.shadowStrength = i2699[12]
  i2698.shadowResolution = i2699[13]
  i2698.lightmapBakeType = i2699[14]
  i2698.renderMode = i2699[15]
  request.r(i2699[16], i2699[17], 0, i2698, 'cookie')
  i2698.cookieSize = i2699[18]
  i2698.shadowNearPlane = i2699[19]
  i2698.occlusionMaskChannel = i2699[20]
  i2698.isBaked = !!i2699[21]
  i2698.mixedLightingMode = i2699[22]
  i2698.enabled = !!i2699[23]
  return i2698
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i2700 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i2701 = data
  i2700.name = i2701[0]
  i2700.tagId = i2701[1]
  i2700.enabled = !!i2701[2]
  i2700.isStatic = !!i2701[3]
  i2700.layer = i2701[4]
  return i2700
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i2702 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i2703 = data
  request.r(i2703[0], i2703[1], 0, i2702, 'sharedMesh')
  return i2702
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i2704 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i2705 = data
  request.r(i2705[0], i2705[1], 0, i2704, 'additionalVertexStreams')
  i2704.enabled = !!i2705[2]
  request.r(i2705[3], i2705[4], 0, i2704, 'sharedMaterial')
  var i2707 = i2705[5]
  var i2706 = []
  for(var i = 0; i < i2707.length; i += 2) {
  request.r(i2707[i + 0], i2707[i + 1], 2, i2706, '')
  }
  i2704.sharedMaterials = i2706
  i2704.receiveShadows = !!i2705[6]
  i2704.shadowCastingMode = i2705[7]
  i2704.sortingLayerID = i2705[8]
  i2704.sortingOrder = i2705[9]
  i2704.lightmapIndex = i2705[10]
  i2704.lightmapSceneIndex = i2705[11]
  i2704.lightmapScaleOffset = new pc.Vec4( i2705[12], i2705[13], i2705[14], i2705[15] )
  i2704.lightProbeUsage = i2705[16]
  i2704.reflectionProbeUsage = i2705[17]
  return i2704
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i2710 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i2711 = data
  i2710.center = new pc.Vec3( i2711[0], i2711[1], i2711[2] )
  i2710.size = new pc.Vec3( i2711[3], i2711[4], i2711[5] )
  i2710.enabled = !!i2711[6]
  i2710.isTrigger = !!i2711[7]
  request.r(i2711[8], i2711[9], 0, i2710, 'material')
  return i2710
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider"] = function (request, data, root) {
  var i2712 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider' )
  var i2713 = data
  i2712.center = new pc.Vec3( i2713[0], i2713[1], i2713[2] )
  i2712.radius = i2713[3]
  i2712.height = i2713[4]
  i2712.direction = i2713[5]
  i2712.enabled = !!i2713[6]
  i2712.isTrigger = !!i2713[7]
  request.r(i2713[8], i2713[9], 0, i2712, 'material')
  return i2712
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i2714 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i2715 = data
  i2714.mass = i2715[0]
  i2714.drag = i2715[1]
  i2714.angularDrag = i2715[2]
  i2714.useGravity = !!i2715[3]
  i2714.isKinematic = !!i2715[4]
  i2714.constraints = i2715[5]
  i2714.maxAngularVelocity = i2715[6]
  i2714.collisionDetectionMode = i2715[7]
  i2714.interpolation = i2715[8]
  return i2714
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i2716 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i2717 = data
  request.r(i2717[0], i2717[1], 0, i2716, 'animatorController')
  request.r(i2717[2], i2717[3], 0, i2716, 'avatar')
  i2716.updateMode = i2717[4]
  i2716.hasTransformHierarchy = !!i2717[5]
  i2716.applyRootMotion = !!i2717[6]
  var i2719 = i2717[7]
  var i2718 = []
  for(var i = 0; i < i2719.length; i += 2) {
  request.r(i2719[i + 0], i2719[i + 1], 2, i2718, '')
  }
  i2716.humanBones = i2718
  i2716.enabled = !!i2717[8]
  return i2716
}

Deserializers["CharacterMovement"] = function (request, data, root) {
  var i2722 = root || request.c( 'CharacterMovement' )
  var i2723 = data
  request.r(i2723[0], i2723[1], 0, i2722, 'joystick')
  request.r(i2723[2], i2723[3], 0, i2722, 'playerCamera')
  request.r(i2723[4], i2723[5], 0, i2722, 'targetMarker')
  i2722.moveSpeed = i2723[6]
  i2722.rotationSpeed = i2723[7]
  i2722.camSwitchingTime = i2723[8]
  i2722.canMove = !!i2723[9]
  request.r(i2723[10], i2723[11], 0, i2722, 'playerAnimator')
  request.r(i2723[12], i2723[13], 0, i2722, 'rb')
  return i2722
}

Deserializers["Player"] = function (request, data, root) {
  var i2724 = root || request.c( 'Player' )
  var i2725 = data
  request.r(i2725[0], i2725[1], 0, i2724, 'headPoint')
  i2724.currentPickedBooks = i2725[2]
  var i2727 = i2725[3]
  var i2726 = []
  for(var i = 0; i < i2727.length; i += 1) {
    i2726.push( request.d('Player+PlayerCatchPoint', i2727[i + 0]) );
  }
  i2724.playerCatchPoints = i2726
  i2724.catchDuration = i2725[4]
  i2724.moveBookDuration = i2725[5]
  return i2724
}

Deserializers["Player+PlayerCatchPoint"] = function (request, data, root) {
  var i2730 = root || request.c( 'Player+PlayerCatchPoint' )
  var i2731 = data
  request.r(i2731[0], i2731[1], 0, i2730, 'catchPoint')
  i2730.isOccupied = !!i2731[2]
  return i2730
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer"] = function (request, data, root) {
  var i2732 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer' )
  var i2733 = data
  request.r(i2733[0], i2733[1], 0, i2732, 'sharedMesh')
  var i2735 = i2733[2]
  var i2734 = []
  for(var i = 0; i < i2735.length; i += 2) {
  request.r(i2735[i + 0], i2735[i + 1], 2, i2734, '')
  }
  i2732.bones = i2734
  i2732.updateWhenOffscreen = !!i2733[3]
  i2732.localBounds = i2733[4]
  request.r(i2733[5], i2733[6], 0, i2732, 'rootBone')
  var i2737 = i2733[7]
  var i2736 = []
  for(var i = 0; i < i2737.length; i += 1) {
    i2736.push( request.d('Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight', i2737[i + 0]) );
  }
  i2732.blendShapesWeights = i2736
  i2732.enabled = !!i2733[8]
  request.r(i2733[9], i2733[10], 0, i2732, 'sharedMaterial')
  var i2739 = i2733[11]
  var i2738 = []
  for(var i = 0; i < i2739.length; i += 2) {
  request.r(i2739[i + 0], i2739[i + 1], 2, i2738, '')
  }
  i2732.sharedMaterials = i2738
  i2732.receiveShadows = !!i2733[12]
  i2732.shadowCastingMode = i2733[13]
  i2732.sortingLayerID = i2733[14]
  i2732.sortingOrder = i2733[15]
  i2732.lightmapIndex = i2733[16]
  i2732.lightmapSceneIndex = i2733[17]
  i2732.lightmapScaleOffset = new pc.Vec4( i2733[18], i2733[19], i2733[20], i2733[21] )
  i2732.lightProbeUsage = i2733[22]
  i2732.reflectionProbeUsage = i2733[23]
  return i2732
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight"] = function (request, data, root) {
  var i2742 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight' )
  var i2743 = data
  i2742.weight = i2743[0]
  return i2742
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i2744 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i2745 = data
  request.r(i2745[0], i2745[1], 0, i2744, 'clip')
  request.r(i2745[2], i2745[3], 0, i2744, 'outputAudioMixerGroup')
  i2744.playOnAwake = !!i2745[4]
  i2744.loop = !!i2745[5]
  i2744.time = i2745[6]
  i2744.volume = i2745[7]
  i2744.pitch = i2745[8]
  i2744.enabled = !!i2745[9]
  return i2744
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i2746 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i2747 = data
  i2746.aspect = i2747[0]
  i2746.orthographic = !!i2747[1]
  i2746.orthographicSize = i2747[2]
  i2746.backgroundColor = new pc.Color(i2747[3], i2747[4], i2747[5], i2747[6])
  i2746.nearClipPlane = i2747[7]
  i2746.farClipPlane = i2747[8]
  i2746.fieldOfView = i2747[9]
  i2746.depth = i2747[10]
  i2746.clearFlags = i2747[11]
  i2746.cullingMask = i2747[12]
  i2746.rect = i2747[13]
  request.r(i2747[14], i2747[15], 0, i2746, 'targetTexture')
  i2746.usePhysicalProperties = !!i2747[16]
  i2746.focalLength = i2747[17]
  i2746.sensorSize = new pc.Vec2( i2747[18], i2747[19] )
  i2746.lensShift = new pc.Vec2( i2747[20], i2747[21] )
  i2746.gateFit = i2747[22]
  i2746.commandBufferCount = i2747[23]
  i2746.cameraType = i2747[24]
  i2746.enabled = !!i2747[25]
  return i2746
}

Deserializers["CameraFollower"] = function (request, data, root) {
  var i2748 = root || request.c( 'CameraFollower' )
  var i2749 = data
  i2748.positionOffset = new pc.Vec3( i2749[0], i2749[1], i2749[2] )
  i2748.followSpeed = i2749[3]
  request.r(i2749[4], i2749[5], 0, i2748, 'character')
  i2748.inRoomPositionOffset = new pc.Vec3( i2749[6], i2749[7], i2749[8] )
  return i2748
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i2750 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i2751 = data
  i2750.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i2751[0], i2750.main)
  i2750.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i2751[1], i2750.colorBySpeed)
  i2750.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i2751[2], i2750.colorOverLifetime)
  i2750.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i2751[3], i2750.emission)
  i2750.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i2751[4], i2750.rotationBySpeed)
  i2750.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i2751[5], i2750.rotationOverLifetime)
  i2750.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i2751[6], i2750.shape)
  i2750.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i2751[7], i2750.sizeBySpeed)
  i2750.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i2751[8], i2750.sizeOverLifetime)
  i2750.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i2751[9], i2750.textureSheetAnimation)
  i2750.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i2751[10], i2750.velocityOverLifetime)
  i2750.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i2751[11], i2750.noise)
  i2750.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i2751[12], i2750.inheritVelocity)
  i2750.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i2751[13], i2750.forceOverLifetime)
  i2750.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i2751[14], i2750.limitVelocityOverLifetime)
  i2750.useAutoRandomSeed = !!i2751[15]
  i2750.randomSeed = i2751[16]
  return i2750
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i2752 = root || new pc.ParticleSystemMain()
  var i2753 = data
  i2752.duration = i2753[0]
  i2752.loop = !!i2753[1]
  i2752.prewarm = !!i2753[2]
  i2752.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2753[3], i2752.startDelay)
  i2752.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2753[4], i2752.startLifetime)
  i2752.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2753[5], i2752.startSpeed)
  i2752.startSize3D = !!i2753[6]
  i2752.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2753[7], i2752.startSizeX)
  i2752.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2753[8], i2752.startSizeY)
  i2752.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2753[9], i2752.startSizeZ)
  i2752.startRotation3D = !!i2753[10]
  i2752.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2753[11], i2752.startRotationX)
  i2752.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2753[12], i2752.startRotationY)
  i2752.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2753[13], i2752.startRotationZ)
  i2752.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2753[14], i2752.startColor)
  i2752.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2753[15], i2752.gravityModifier)
  i2752.simulationSpace = i2753[16]
  request.r(i2753[17], i2753[18], 0, i2752, 'customSimulationSpace')
  i2752.simulationSpeed = i2753[19]
  i2752.useUnscaledTime = !!i2753[20]
  i2752.scalingMode = i2753[21]
  i2752.playOnAwake = !!i2753[22]
  i2752.maxParticles = i2753[23]
  i2752.emitterVelocityMode = i2753[24]
  i2752.stopAction = i2753[25]
  return i2752
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i2754 = root || new pc.MinMaxCurve()
  var i2755 = data
  i2754.mode = i2755[0]
  i2754.curveMin = new pc.AnimationCurve( { keys_flow: i2755[1] } )
  i2754.curveMax = new pc.AnimationCurve( { keys_flow: i2755[2] } )
  i2754.curveMultiplier = i2755[3]
  i2754.constantMin = i2755[4]
  i2754.constantMax = i2755[5]
  return i2754
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i2756 = root || new pc.MinMaxGradient()
  var i2757 = data
  i2756.mode = i2757[0]
  i2756.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i2757[1], i2756.gradientMin)
  i2756.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i2757[2], i2756.gradientMax)
  i2756.colorMin = new pc.Color(i2757[3], i2757[4], i2757[5], i2757[6])
  i2756.colorMax = new pc.Color(i2757[7], i2757[8], i2757[9], i2757[10])
  return i2756
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i2758 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i2759 = data
  i2758.mode = i2759[0]
  var i2761 = i2759[1]
  var i2760 = []
  for(var i = 0; i < i2761.length; i += 1) {
    i2760.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i2761[i + 0]) );
  }
  i2758.colorKeys = i2760
  var i2763 = i2759[2]
  var i2762 = []
  for(var i = 0; i < i2763.length; i += 1) {
    i2762.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i2763[i + 0]) );
  }
  i2758.alphaKeys = i2762
  return i2758
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i2766 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i2767 = data
  i2766.color = new pc.Color(i2767[0], i2767[1], i2767[2], i2767[3])
  i2766.time = i2767[4]
  return i2766
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i2770 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i2771 = data
  i2770.alpha = i2771[0]
  i2770.time = i2771[1]
  return i2770
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i2772 = root || new pc.ParticleSystemColorBySpeed()
  var i2773 = data
  i2772.enabled = !!i2773[0]
  i2772.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2773[1], i2772.color)
  i2772.range = new pc.Vec2( i2773[2], i2773[3] )
  return i2772
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i2774 = root || new pc.ParticleSystemColorOverLifetime()
  var i2775 = data
  i2774.enabled = !!i2775[0]
  i2774.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2775[1], i2774.color)
  return i2774
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i2776 = root || new pc.ParticleSystemEmitter()
  var i2777 = data
  i2776.enabled = !!i2777[0]
  i2776.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2777[1], i2776.rateOverTime)
  i2776.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2777[2], i2776.rateOverDistance)
  var i2779 = i2777[3]
  var i2778 = []
  for(var i = 0; i < i2779.length; i += 1) {
    i2778.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i2779[i + 0]) );
  }
  i2776.bursts = i2778
  return i2776
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i2782 = root || new pc.ParticleSystemBurst()
  var i2783 = data
  i2782.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2783[0], i2782.count)
  i2782.cycleCount = i2783[1]
  i2782.minCount = i2783[2]
  i2782.maxCount = i2783[3]
  i2782.repeatInterval = i2783[4]
  i2782.time = i2783[5]
  return i2782
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i2784 = root || new pc.ParticleSystemRotationBySpeed()
  var i2785 = data
  i2784.enabled = !!i2785[0]
  i2784.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2785[1], i2784.x)
  i2784.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2785[2], i2784.y)
  i2784.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2785[3], i2784.z)
  i2784.separateAxes = !!i2785[4]
  i2784.range = new pc.Vec2( i2785[5], i2785[6] )
  return i2784
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i2786 = root || new pc.ParticleSystemRotationOverLifetime()
  var i2787 = data
  i2786.enabled = !!i2787[0]
  i2786.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2787[1], i2786.x)
  i2786.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2787[2], i2786.y)
  i2786.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2787[3], i2786.z)
  i2786.separateAxes = !!i2787[4]
  return i2786
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i2788 = root || new pc.ParticleSystemShape()
  var i2789 = data
  i2788.enabled = !!i2789[0]
  i2788.shapeType = i2789[1]
  i2788.randomDirectionAmount = i2789[2]
  i2788.sphericalDirectionAmount = i2789[3]
  i2788.randomPositionAmount = i2789[4]
  i2788.alignToDirection = !!i2789[5]
  i2788.radius = i2789[6]
  i2788.radiusMode = i2789[7]
  i2788.radiusSpread = i2789[8]
  i2788.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2789[9], i2788.radiusSpeed)
  i2788.radiusThickness = i2789[10]
  i2788.angle = i2789[11]
  i2788.length = i2789[12]
  i2788.boxThickness = new pc.Vec3( i2789[13], i2789[14], i2789[15] )
  i2788.meshShapeType = i2789[16]
  request.r(i2789[17], i2789[18], 0, i2788, 'mesh')
  request.r(i2789[19], i2789[20], 0, i2788, 'meshRenderer')
  request.r(i2789[21], i2789[22], 0, i2788, 'skinnedMeshRenderer')
  i2788.useMeshMaterialIndex = !!i2789[23]
  i2788.meshMaterialIndex = i2789[24]
  i2788.useMeshColors = !!i2789[25]
  i2788.normalOffset = i2789[26]
  i2788.arc = i2789[27]
  i2788.arcMode = i2789[28]
  i2788.arcSpread = i2789[29]
  i2788.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2789[30], i2788.arcSpeed)
  i2788.donutRadius = i2789[31]
  i2788.position = new pc.Vec3( i2789[32], i2789[33], i2789[34] )
  i2788.rotation = new pc.Vec3( i2789[35], i2789[36], i2789[37] )
  i2788.scale = new pc.Vec3( i2789[38], i2789[39], i2789[40] )
  return i2788
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i2790 = root || new pc.ParticleSystemSizeBySpeed()
  var i2791 = data
  i2790.enabled = !!i2791[0]
  i2790.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2791[1], i2790.x)
  i2790.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2791[2], i2790.y)
  i2790.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2791[3], i2790.z)
  i2790.separateAxes = !!i2791[4]
  i2790.range = new pc.Vec2( i2791[5], i2791[6] )
  return i2790
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i2792 = root || new pc.ParticleSystemSizeOverLifetime()
  var i2793 = data
  i2792.enabled = !!i2793[0]
  i2792.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2793[1], i2792.x)
  i2792.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2793[2], i2792.y)
  i2792.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2793[3], i2792.z)
  i2792.separateAxes = !!i2793[4]
  return i2792
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i2794 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i2795 = data
  i2794.enabled = !!i2795[0]
  i2794.mode = i2795[1]
  i2794.animation = i2795[2]
  i2794.numTilesX = i2795[3]
  i2794.numTilesY = i2795[4]
  i2794.useRandomRow = !!i2795[5]
  i2794.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2795[6], i2794.frameOverTime)
  i2794.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2795[7], i2794.startFrame)
  i2794.cycleCount = i2795[8]
  i2794.rowIndex = i2795[9]
  i2794.flipU = i2795[10]
  i2794.flipV = i2795[11]
  i2794.spriteCount = i2795[12]
  var i2797 = i2795[13]
  var i2796 = []
  for(var i = 0; i < i2797.length; i += 2) {
  request.r(i2797[i + 0], i2797[i + 1], 2, i2796, '')
  }
  i2794.sprites = i2796
  return i2794
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i2800 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i2801 = data
  i2800.enabled = !!i2801[0]
  i2800.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2801[1], i2800.x)
  i2800.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2801[2], i2800.y)
  i2800.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2801[3], i2800.z)
  i2800.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2801[4], i2800.radial)
  i2800.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2801[5], i2800.speedModifier)
  i2800.space = i2801[6]
  i2800.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2801[7], i2800.orbitalX)
  i2800.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2801[8], i2800.orbitalY)
  i2800.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2801[9], i2800.orbitalZ)
  i2800.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2801[10], i2800.orbitalOffsetX)
  i2800.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2801[11], i2800.orbitalOffsetY)
  i2800.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2801[12], i2800.orbitalOffsetZ)
  return i2800
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i2802 = root || new pc.ParticleSystemNoise()
  var i2803 = data
  i2802.enabled = !!i2803[0]
  i2802.separateAxes = !!i2803[1]
  i2802.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2803[2], i2802.strengthX)
  i2802.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2803[3], i2802.strengthY)
  i2802.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2803[4], i2802.strengthZ)
  i2802.frequency = i2803[5]
  i2802.damping = !!i2803[6]
  i2802.octaveCount = i2803[7]
  i2802.octaveMultiplier = i2803[8]
  i2802.octaveScale = i2803[9]
  i2802.quality = i2803[10]
  i2802.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2803[11], i2802.scrollSpeed)
  i2802.scrollSpeedMultiplier = i2803[12]
  i2802.remapEnabled = !!i2803[13]
  i2802.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2803[14], i2802.remapX)
  i2802.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2803[15], i2802.remapY)
  i2802.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2803[16], i2802.remapZ)
  i2802.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2803[17], i2802.positionAmount)
  i2802.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2803[18], i2802.rotationAmount)
  i2802.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2803[19], i2802.sizeAmount)
  return i2802
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i2804 = root || new pc.ParticleSystemInheritVelocity()
  var i2805 = data
  i2804.enabled = !!i2805[0]
  i2804.mode = i2805[1]
  i2804.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2805[2], i2804.curve)
  return i2804
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i2806 = root || new pc.ParticleSystemForceOverLifetime()
  var i2807 = data
  i2806.enabled = !!i2807[0]
  i2806.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2807[1], i2806.x)
  i2806.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2807[2], i2806.y)
  i2806.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2807[3], i2806.z)
  i2806.space = i2807[4]
  i2806.randomized = !!i2807[5]
  return i2806
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i2808 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i2809 = data
  i2808.enabled = !!i2809[0]
  i2808.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2809[1], i2808.limit)
  i2808.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2809[2], i2808.limitX)
  i2808.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2809[3], i2808.limitY)
  i2808.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2809[4], i2808.limitZ)
  i2808.dampen = i2809[5]
  i2808.separateAxes = !!i2809[6]
  i2808.space = i2809[7]
  i2808.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2809[8], i2808.drag)
  i2808.multiplyDragByParticleSize = !!i2809[9]
  i2808.multiplyDragByParticleVelocity = !!i2809[10]
  return i2808
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i2810 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i2811 = data
  request.r(i2811[0], i2811[1], 0, i2810, 'mesh')
  i2810.meshCount = i2811[2]
  i2810.activeVertexStreamsCount = i2811[3]
  i2810.alignment = i2811[4]
  i2810.renderMode = i2811[5]
  i2810.sortMode = i2811[6]
  i2810.lengthScale = i2811[7]
  i2810.velocityScale = i2811[8]
  i2810.cameraVelocityScale = i2811[9]
  i2810.normalDirection = i2811[10]
  i2810.sortingFudge = i2811[11]
  i2810.minParticleSize = i2811[12]
  i2810.maxParticleSize = i2811[13]
  i2810.pivot = new pc.Vec3( i2811[14], i2811[15], i2811[16] )
  request.r(i2811[17], i2811[18], 0, i2810, 'trailMaterial')
  i2810.applyActiveColorSpace = !!i2811[19]
  i2810.enabled = !!i2811[20]
  request.r(i2811[21], i2811[22], 0, i2810, 'sharedMaterial')
  var i2813 = i2811[23]
  var i2812 = []
  for(var i = 0; i < i2813.length; i += 2) {
  request.r(i2813[i + 0], i2813[i + 1], 2, i2812, '')
  }
  i2810.sharedMaterials = i2812
  i2810.receiveShadows = !!i2811[24]
  i2810.shadowCastingMode = i2811[25]
  i2810.sortingLayerID = i2811[26]
  i2810.sortingOrder = i2811[27]
  i2810.lightmapIndex = i2811[28]
  i2810.lightmapSceneIndex = i2811[29]
  i2810.lightmapScaleOffset = new pc.Vec4( i2811[30], i2811[31], i2811[32], i2811[33] )
  i2810.lightProbeUsage = i2811[34]
  i2810.reflectionProbeUsage = i2811[35]
  return i2810
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i2814 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i2815 = data
  i2814.pivot = new pc.Vec2( i2815[0], i2815[1] )
  i2814.anchorMin = new pc.Vec2( i2815[2], i2815[3] )
  i2814.anchorMax = new pc.Vec2( i2815[4], i2815[5] )
  i2814.sizeDelta = new pc.Vec2( i2815[6], i2815[7] )
  i2814.anchoredPosition3D = new pc.Vec3( i2815[8], i2815[9], i2815[10] )
  i2814.rotation = new pc.Quat(i2815[11], i2815[12], i2815[13], i2815[14])
  i2814.scale = new pc.Vec3( i2815[15], i2815[16], i2815[17] )
  return i2814
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i2816 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i2817 = data
  i2816.planeDistance = i2817[0]
  i2816.referencePixelsPerUnit = i2817[1]
  i2816.isFallbackOverlay = !!i2817[2]
  i2816.renderMode = i2817[3]
  i2816.renderOrder = i2817[4]
  i2816.sortingLayerName = i2817[5]
  i2816.sortingOrder = i2817[6]
  i2816.scaleFactor = i2817[7]
  request.r(i2817[8], i2817[9], 0, i2816, 'worldCamera')
  i2816.overrideSorting = !!i2817[10]
  i2816.pixelPerfect = !!i2817[11]
  i2816.targetDisplay = i2817[12]
  i2816.overridePixelPerfect = !!i2817[13]
  i2816.enabled = !!i2817[14]
  return i2816
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i2818 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i2819 = data
  i2818.m_UiScaleMode = i2819[0]
  i2818.m_ReferencePixelsPerUnit = i2819[1]
  i2818.m_ScaleFactor = i2819[2]
  i2818.m_ReferenceResolution = new pc.Vec2( i2819[3], i2819[4] )
  i2818.m_ScreenMatchMode = i2819[5]
  i2818.m_MatchWidthOrHeight = i2819[6]
  i2818.m_PhysicalUnit = i2819[7]
  i2818.m_FallbackScreenDPI = i2819[8]
  i2818.m_DefaultSpriteDPI = i2819[9]
  i2818.m_DynamicPixelsPerUnit = i2819[10]
  i2818.m_PresetInfoIsWorld = !!i2819[11]
  return i2818
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i2820 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i2821 = data
  i2820.m_IgnoreReversedGraphics = !!i2821[0]
  i2820.m_BlockingObjects = i2821[1]
  i2820.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i2821[2] )
  return i2820
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i2822 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i2823 = data
  i2822.cullTransparentMesh = !!i2823[0]
  return i2822
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i2824 = root || request.c( 'UnityEngine.UI.Image' )
  var i2825 = data
  request.r(i2825[0], i2825[1], 0, i2824, 'm_Sprite')
  i2824.m_Type = i2825[2]
  i2824.m_PreserveAspect = !!i2825[3]
  i2824.m_FillCenter = !!i2825[4]
  i2824.m_FillMethod = i2825[5]
  i2824.m_FillAmount = i2825[6]
  i2824.m_FillClockwise = !!i2825[7]
  i2824.m_FillOrigin = i2825[8]
  i2824.m_UseSpriteMesh = !!i2825[9]
  i2824.m_PixelsPerUnitMultiplier = i2825[10]
  request.r(i2825[11], i2825[12], 0, i2824, 'm_Material')
  i2824.m_Maskable = !!i2825[13]
  i2824.m_Color = new pc.Color(i2825[14], i2825[15], i2825[16], i2825[17])
  i2824.m_RaycastTarget = !!i2825[18]
  i2824.m_RaycastPadding = new pc.Vec4( i2825[19], i2825[20], i2825[21], i2825[22] )
  return i2824
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i2826 = root || request.c( 'UnityEngine.UI.Button' )
  var i2827 = data
  i2826.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i2827[0], i2826.m_OnClick)
  i2826.m_Navigation = request.d('UnityEngine.UI.Navigation', i2827[1], i2826.m_Navigation)
  i2826.m_Transition = i2827[2]
  i2826.m_Colors = request.d('UnityEngine.UI.ColorBlock', i2827[3], i2826.m_Colors)
  i2826.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i2827[4], i2826.m_SpriteState)
  i2826.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i2827[5], i2826.m_AnimationTriggers)
  i2826.m_Interactable = !!i2827[6]
  request.r(i2827[7], i2827[8], 0, i2826, 'm_TargetGraphic')
  return i2826
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i2828 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i2829 = data
  i2828.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2829[0], i2828.m_PersistentCalls)
  return i2828
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i2830 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i2831 = data
  var i2833 = i2831[0]
  var i2832 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i2833.length; i += 1) {
    i2832.add(request.d('UnityEngine.Events.PersistentCall', i2833[i + 0]));
  }
  i2830.m_Calls = i2832
  return i2830
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i2836 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i2837 = data
  request.r(i2837[0], i2837[1], 0, i2836, 'm_Target')
  i2836.m_TargetAssemblyTypeName = i2837[2]
  i2836.m_MethodName = i2837[3]
  i2836.m_Mode = i2837[4]
  i2836.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i2837[5], i2836.m_Arguments)
  i2836.m_CallState = i2837[6]
  return i2836
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i2838 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i2839 = data
  request.r(i2839[0], i2839[1], 0, i2838, 'm_ObjectArgument')
  i2838.m_ObjectArgumentAssemblyTypeName = i2839[2]
  i2838.m_IntArgument = i2839[3]
  i2838.m_FloatArgument = i2839[4]
  i2838.m_StringArgument = i2839[5]
  i2838.m_BoolArgument = !!i2839[6]
  return i2838
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i2840 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i2841 = data
  i2840.m_Mode = i2841[0]
  i2840.m_WrapAround = !!i2841[1]
  request.r(i2841[2], i2841[3], 0, i2840, 'm_SelectOnUp')
  request.r(i2841[4], i2841[5], 0, i2840, 'm_SelectOnDown')
  request.r(i2841[6], i2841[7], 0, i2840, 'm_SelectOnLeft')
  request.r(i2841[8], i2841[9], 0, i2840, 'm_SelectOnRight')
  return i2840
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i2842 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i2843 = data
  i2842.m_NormalColor = new pc.Color(i2843[0], i2843[1], i2843[2], i2843[3])
  i2842.m_HighlightedColor = new pc.Color(i2843[4], i2843[5], i2843[6], i2843[7])
  i2842.m_PressedColor = new pc.Color(i2843[8], i2843[9], i2843[10], i2843[11])
  i2842.m_SelectedColor = new pc.Color(i2843[12], i2843[13], i2843[14], i2843[15])
  i2842.m_DisabledColor = new pc.Color(i2843[16], i2843[17], i2843[18], i2843[19])
  i2842.m_ColorMultiplier = i2843[20]
  i2842.m_FadeDuration = i2843[21]
  return i2842
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i2844 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i2845 = data
  request.r(i2845[0], i2845[1], 0, i2844, 'm_HighlightedSprite')
  request.r(i2845[2], i2845[3], 0, i2844, 'm_PressedSprite')
  request.r(i2845[4], i2845[5], 0, i2844, 'm_SelectedSprite')
  request.r(i2845[6], i2845[7], 0, i2844, 'm_DisabledSprite')
  return i2844
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i2846 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i2847 = data
  i2846.m_NormalTrigger = i2847[0]
  i2846.m_HighlightedTrigger = i2847[1]
  i2846.m_PressedTrigger = i2847[2]
  i2846.m_SelectedTrigger = i2847[3]
  i2846.m_DisabledTrigger = i2847[4]
  return i2846
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i2848 = root || request.c( 'UnityEngine.UI.Text' )
  var i2849 = data
  i2848.m_FontData = request.d('UnityEngine.UI.FontData', i2849[0], i2848.m_FontData)
  i2848.m_Text = i2849[1]
  request.r(i2849[2], i2849[3], 0, i2848, 'm_Material')
  i2848.m_Maskable = !!i2849[4]
  i2848.m_Color = new pc.Color(i2849[5], i2849[6], i2849[7], i2849[8])
  i2848.m_RaycastTarget = !!i2849[9]
  i2848.m_RaycastPadding = new pc.Vec4( i2849[10], i2849[11], i2849[12], i2849[13] )
  return i2848
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i2850 = root || request.c( 'UnityEngine.UI.FontData' )
  var i2851 = data
  request.r(i2851[0], i2851[1], 0, i2850, 'm_Font')
  i2850.m_FontSize = i2851[2]
  i2850.m_FontStyle = i2851[3]
  i2850.m_BestFit = !!i2851[4]
  i2850.m_MinSize = i2851[5]
  i2850.m_MaxSize = i2851[6]
  i2850.m_Alignment = i2851[7]
  i2850.m_AlignByGeometry = !!i2851[8]
  i2850.m_RichText = !!i2851[9]
  i2850.m_HorizontalOverflow = i2851[10]
  i2850.m_VerticalOverflow = i2851[11]
  i2850.m_LineSpacing = i2851[12]
  return i2850
}

Deserializers["UnityEngine.UI.Outline"] = function (request, data, root) {
  var i2852 = root || request.c( 'UnityEngine.UI.Outline' )
  var i2853 = data
  i2852.m_EffectColor = new pc.Color(i2853[0], i2853[1], i2853[2], i2853[3])
  i2852.m_EffectDistance = new pc.Vec2( i2853[4], i2853[5] )
  i2852.m_UseGraphicAlpha = !!i2853[6]
  return i2852
}

Deserializers["UIManager"] = function (request, data, root) {
  var i2854 = root || request.c( 'UIManager' )
  var i2855 = data
  request.r(i2855[0], i2855[1], 0, i2854, 'playerControlPanel')
  request.r(i2855[2], i2855[3], 0, i2854, 'endInstructionPanel')
  request.r(i2855[4], i2855[5], 0, i2854, 'instructionCntnr')
  request.r(i2855[6], i2855[7], 0, i2854, 'instructionText')
  request.r(i2855[8], i2855[9], 0, i2854, 'infoImg')
  request.r(i2855[10], i2855[11], 0, i2854, 'infoTxt')
  return i2854
}

Deserializers["PlayableDynamicJoystick"] = function (request, data, root) {
  var i2856 = root || request.c( 'PlayableDynamicJoystick' )
  var i2857 = data
  i2856.deadZone = i2857[0]
  i2856.handleRange = i2857[1]
  request.r(i2857[2], i2857[3], 0, i2856, 'uiCamera')
  request.r(i2857[4], i2857[5], 0, i2856, 'background')
  request.r(i2857[6], i2857[7], 0, i2856, 'joystickHandle')
  i2856.axisOptions = i2857[8]
  i2856.maxRadius = i2857[9]
  return i2856
}

Deserializers["GameController"] = function (request, data, root) {
  var i2858 = root || request.c( 'GameController' )
  var i2859 = data
  request.r(i2859[0], i2859[1], 0, i2858, 'confettiParticles')
  i2858.totalPlacedBooks = i2859[2]
  request.r(i2859[3], i2859[4], 0, i2858, 'confettiCamera')
  var i2861 = i2859[5]
  var i2860 = []
  for(var i = 0; i < i2861.length; i += 2) {
  request.r(i2861[i + 0], i2861[i + 1], 2, i2860, '')
  }
  i2858.TargetPoins = i2860
  var i2863 = i2859[6]
  var i2862 = []
  for(var i = 0; i < i2863.length; i += 2) {
  request.r(i2863[i + 0], i2863[i + 1], 2, i2862, '')
  }
  i2858.shelfs = i2862
  return i2858
}

Deserializers["Shelf"] = function (request, data, root) {
  var i2868 = root || request.c( 'Shelf' )
  var i2869 = data
  var i2871 = i2869[0]
  var i2870 = []
  for(var i = 0; i < i2871.length; i += 1) {
    i2870.push( request.d('Shelf+ShelfPoint', i2871[i + 0]) );
  }
  i2868.shelfPoints = i2870
  i2868.placedBooksCount = i2869[1]
  request.r(i2869[2], i2869[3], 0, i2868, 'circle')
  request.r(i2869[4], i2869[5], 0, i2868, 'shelf_Cam')
  request.r(i2869[6], i2869[7], 0, i2868, 'playerStandPoint')
  return i2868
}

Deserializers["Shelf+ShelfPoint"] = function (request, data, root) {
  var i2874 = root || request.c( 'Shelf+ShelfPoint' )
  var i2875 = data
  request.r(i2875[0], i2875[1], 0, i2874, 'point')
  i2874.isOccupied = !!i2875[2]
  return i2874
}

Deserializers["Book"] = function (request, data, root) {
  var i2876 = root || request.c( 'Book' )
  var i2877 = data
  return i2876
}

Deserializers["Door"] = function (request, data, root) {
  var i2878 = root || request.c( 'Door' )
  var i2879 = data
  request.r(i2879[0], i2879[1], 0, i2878, 'door_Cam')
  return i2878
}

Deserializers["AudioManager"] = function (request, data, root) {
  var i2880 = root || request.c( 'AudioManager' )
  var i2881 = data
  request.r(i2881[0], i2881[1], 0, i2880, 'bgAS')
  request.r(i2881[2], i2881[3], 0, i2880, 'inGameAS')
  request.r(i2881[4], i2881[5], 0, i2880, 'PickTomato')
  request.r(i2881[6], i2881[7], 0, i2880, 'PopTomato')
  request.r(i2881[8], i2881[9], 0, i2880, 'checkPoint')
  request.r(i2881[10], i2881[11], 0, i2880, 'levelComplete')
  return i2880
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i2882 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i2883 = data
  request.r(i2883[0], i2883[1], 0, i2882, 'm_FirstSelected')
  i2882.m_sendNavigationEvents = !!i2883[2]
  i2882.m_DragThreshold = i2883[3]
  return i2882
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i2884 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i2885 = data
  i2884.m_HorizontalAxis = i2885[0]
  i2884.m_VerticalAxis = i2885[1]
  i2884.m_SubmitButton = i2885[2]
  i2884.m_CancelButton = i2885[3]
  i2884.m_InputActionsPerSecond = i2885[4]
  i2884.m_RepeatDelay = i2885[5]
  i2884.m_ForceModuleActive = !!i2885[6]
  i2884.m_SendPointerHoverToParent = !!i2885[7]
  return i2884
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i2886 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i2887 = data
  i2886.ambientIntensity = i2887[0]
  i2886.reflectionIntensity = i2887[1]
  i2886.ambientMode = i2887[2]
  i2886.ambientLight = new pc.Color(i2887[3], i2887[4], i2887[5], i2887[6])
  i2886.ambientSkyColor = new pc.Color(i2887[7], i2887[8], i2887[9], i2887[10])
  i2886.ambientGroundColor = new pc.Color(i2887[11], i2887[12], i2887[13], i2887[14])
  i2886.ambientEquatorColor = new pc.Color(i2887[15], i2887[16], i2887[17], i2887[18])
  i2886.fogColor = new pc.Color(i2887[19], i2887[20], i2887[21], i2887[22])
  i2886.fogEndDistance = i2887[23]
  i2886.fogStartDistance = i2887[24]
  i2886.fogDensity = i2887[25]
  i2886.fog = !!i2887[26]
  request.r(i2887[27], i2887[28], 0, i2886, 'skybox')
  i2886.fogMode = i2887[29]
  var i2889 = i2887[30]
  var i2888 = []
  for(var i = 0; i < i2889.length; i += 1) {
    i2888.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i2889[i + 0]) );
  }
  i2886.lightmaps = i2888
  i2886.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i2887[31], i2886.lightProbes)
  i2886.lightmapsMode = i2887[32]
  i2886.mixedBakeMode = i2887[33]
  i2886.environmentLightingMode = i2887[34]
  i2886.ambientProbe = new pc.SphericalHarmonicsL2(i2887[35])
  request.r(i2887[36], i2887[37], 0, i2886, 'customReflection')
  request.r(i2887[38], i2887[39], 0, i2886, 'defaultReflection')
  i2886.defaultReflectionMode = i2887[40]
  i2886.defaultReflectionResolution = i2887[41]
  i2886.sunLightObjectId = i2887[42]
  i2886.pixelLightCount = i2887[43]
  i2886.defaultReflectionHDR = !!i2887[44]
  i2886.hasLightDataAsset = !!i2887[45]
  i2886.hasManualGenerate = !!i2887[46]
  return i2886
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i2892 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i2893 = data
  request.r(i2893[0], i2893[1], 0, i2892, 'lightmapColor')
  request.r(i2893[2], i2893[3], 0, i2892, 'lightmapDirection')
  request.r(i2893[4], i2893[5], 0, i2892, 'shadowMask')
  return i2892
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i2894 = root || new UnityEngine.LightProbes()
  var i2895 = data
  return i2894
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i2902 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i2903 = data
  var i2905 = i2903[0]
  var i2904 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i2905.length; i += 1) {
    i2904.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i2905[i + 0]));
  }
  i2902.ShaderCompilationErrors = i2904
  i2902.name = i2903[1]
  i2902.guid = i2903[2]
  var i2907 = i2903[3]
  var i2906 = []
  for(var i = 0; i < i2907.length; i += 1) {
    i2906.push( i2907[i + 0] );
  }
  i2902.shaderDefinedKeywords = i2906
  var i2909 = i2903[4]
  var i2908 = []
  for(var i = 0; i < i2909.length; i += 1) {
    i2908.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i2909[i + 0]) );
  }
  i2902.passes = i2908
  var i2911 = i2903[5]
  var i2910 = []
  for(var i = 0; i < i2911.length; i += 1) {
    i2910.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i2911[i + 0]) );
  }
  i2902.usePasses = i2910
  var i2913 = i2903[6]
  var i2912 = []
  for(var i = 0; i < i2913.length; i += 1) {
    i2912.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i2913[i + 0]) );
  }
  i2902.defaultParameterValues = i2912
  request.r(i2903[7], i2903[8], 0, i2902, 'unityFallbackShader')
  i2902.readDepth = !!i2903[9]
  i2902.hasDepthOnlyPass = !!i2903[10]
  i2902.isCreatedByShaderGraph = !!i2903[11]
  i2902.disableBatching = !!i2903[12]
  i2902.compiled = !!i2903[13]
  return i2902
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i2916 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i2917 = data
  i2916.shaderName = i2917[0]
  i2916.errorMessage = i2917[1]
  return i2916
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i2922 = root || new pc.UnityShaderPass()
  var i2923 = data
  i2922.id = i2923[0]
  i2922.subShaderIndex = i2923[1]
  i2922.name = i2923[2]
  i2922.passType = i2923[3]
  i2922.grabPassTextureName = i2923[4]
  i2922.usePass = !!i2923[5]
  i2922.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2923[6], i2922.zTest)
  i2922.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2923[7], i2922.zWrite)
  i2922.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2923[8], i2922.culling)
  i2922.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2923[9], i2922.blending)
  i2922.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2923[10], i2922.alphaBlending)
  i2922.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2923[11], i2922.colorWriteMask)
  i2922.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2923[12], i2922.offsetUnits)
  i2922.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2923[13], i2922.offsetFactor)
  i2922.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2923[14], i2922.stencilRef)
  i2922.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2923[15], i2922.stencilReadMask)
  i2922.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2923[16], i2922.stencilWriteMask)
  i2922.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2923[17], i2922.stencilOp)
  i2922.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2923[18], i2922.stencilOpFront)
  i2922.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2923[19], i2922.stencilOpBack)
  var i2925 = i2923[20]
  var i2924 = []
  for(var i = 0; i < i2925.length; i += 1) {
    i2924.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i2925[i + 0]) );
  }
  i2922.tags = i2924
  var i2927 = i2923[21]
  var i2926 = []
  for(var i = 0; i < i2927.length; i += 1) {
    i2926.push( i2927[i + 0] );
  }
  i2922.passDefinedKeywords = i2926
  var i2929 = i2923[22]
  var i2928 = []
  for(var i = 0; i < i2929.length; i += 1) {
    i2928.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i2929[i + 0]) );
  }
  i2922.passDefinedKeywordGroups = i2928
  var i2931 = i2923[23]
  var i2930 = []
  for(var i = 0; i < i2931.length; i += 1) {
    i2930.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2931[i + 0]) );
  }
  i2922.variants = i2930
  var i2933 = i2923[24]
  var i2932 = []
  for(var i = 0; i < i2933.length; i += 1) {
    i2932.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2933[i + 0]) );
  }
  i2922.excludedVariants = i2932
  i2922.hasDepthReader = !!i2923[25]
  return i2922
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i2934 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i2935 = data
  i2934.val = i2935[0]
  i2934.name = i2935[1]
  return i2934
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i2936 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i2937 = data
  i2936.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2937[0], i2936.src)
  i2936.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2937[1], i2936.dst)
  i2936.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2937[2], i2936.op)
  return i2936
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i2938 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i2939 = data
  i2938.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2939[0], i2938.pass)
  i2938.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2939[1], i2938.fail)
  i2938.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2939[2], i2938.zFail)
  i2938.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2939[3], i2938.comp)
  return i2938
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i2942 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i2943 = data
  i2942.name = i2943[0]
  i2942.value = i2943[1]
  return i2942
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i2946 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i2947 = data
  var i2949 = i2947[0]
  var i2948 = []
  for(var i = 0; i < i2949.length; i += 1) {
    i2948.push( i2949[i + 0] );
  }
  i2946.keywords = i2948
  i2946.hasDiscard = !!i2947[1]
  return i2946
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i2952 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i2953 = data
  i2952.passId = i2953[0]
  i2952.subShaderIndex = i2953[1]
  var i2955 = i2953[2]
  var i2954 = []
  for(var i = 0; i < i2955.length; i += 1) {
    i2954.push( i2955[i + 0] );
  }
  i2952.keywords = i2954
  i2952.vertexProgram = i2953[3]
  i2952.fragmentProgram = i2953[4]
  i2952.exportedForWebGl2 = !!i2953[5]
  i2952.readDepth = !!i2953[6]
  return i2952
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i2958 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i2959 = data
  request.r(i2959[0], i2959[1], 0, i2958, 'shader')
  i2958.pass = i2959[2]
  return i2958
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i2962 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i2963 = data
  i2962.name = i2963[0]
  i2962.type = i2963[1]
  i2962.value = new pc.Vec4( i2963[2], i2963[3], i2963[4], i2963[5] )
  i2962.textureValue = i2963[6]
  i2962.shaderPropertyFlag = i2963[7]
  return i2962
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i2964 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i2965 = data
  i2964.name = i2965[0]
  request.r(i2965[1], i2965[2], 0, i2964, 'texture')
  i2964.aabb = i2965[3]
  i2964.vertices = i2965[4]
  i2964.triangles = i2965[5]
  i2964.textureRect = UnityEngine.Rect.MinMaxRect(i2965[6], i2965[7], i2965[8], i2965[9])
  i2964.packedRect = UnityEngine.Rect.MinMaxRect(i2965[10], i2965[11], i2965[12], i2965[13])
  i2964.border = new pc.Vec4( i2965[14], i2965[15], i2965[16], i2965[17] )
  i2964.transparency = i2965[18]
  i2964.bounds = i2965[19]
  i2964.pixelsPerUnit = i2965[20]
  i2964.textureWidth = i2965[21]
  i2964.textureHeight = i2965[22]
  i2964.nativeSize = new pc.Vec2( i2965[23], i2965[24] )
  i2964.pivot = new pc.Vec2( i2965[25], i2965[26] )
  i2964.textureRectOffset = new pc.Vec2( i2965[27], i2965[28] )
  return i2964
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i2966 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i2967 = data
  i2966.name = i2967[0]
  return i2966
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i2968 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i2969 = data
  i2968.name = i2969[0]
  i2968.wrapMode = i2969[1]
  i2968.isLooping = !!i2969[2]
  i2968.length = i2969[3]
  var i2971 = i2969[4]
  var i2970 = []
  for(var i = 0; i < i2971.length; i += 1) {
    i2970.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i2971[i + 0]) );
  }
  i2968.curves = i2970
  var i2973 = i2969[5]
  var i2972 = []
  for(var i = 0; i < i2973.length; i += 1) {
    i2972.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i2973[i + 0]) );
  }
  i2968.events = i2972
  i2968.halfPrecision = !!i2969[6]
  i2968._frameRate = i2969[7]
  i2968.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i2969[8], i2968.localBounds)
  i2968.hasMuscleCurves = !!i2969[9]
  var i2975 = i2969[10]
  var i2974 = []
  for(var i = 0; i < i2975.length; i += 1) {
    i2974.push( i2975[i + 0] );
  }
  i2968.clipMuscleConstant = i2974
  i2968.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i2969[11], i2968.clipBindingConstant)
  return i2968
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i2978 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i2979 = data
  i2978.path = i2979[0]
  i2978.hash = i2979[1]
  i2978.componentType = i2979[2]
  i2978.property = i2979[3]
  i2978.keys = i2979[4]
  var i2981 = i2979[5]
  var i2980 = []
  for(var i = 0; i < i2981.length; i += 1) {
    i2980.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i2981[i + 0]) );
  }
  i2978.objectReferenceKeys = i2980
  return i2978
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i2984 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i2985 = data
  i2984.time = i2985[0]
  request.r(i2985[1], i2985[2], 0, i2984, 'value')
  return i2984
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i2988 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i2989 = data
  i2988.functionName = i2989[0]
  i2988.floatParameter = i2989[1]
  i2988.intParameter = i2989[2]
  i2988.stringParameter = i2989[3]
  request.r(i2989[4], i2989[5], 0, i2988, 'objectReferenceParameter')
  i2988.time = i2989[6]
  return i2988
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i2990 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i2991 = data
  i2990.center = new pc.Vec3( i2991[0], i2991[1], i2991[2] )
  i2990.extends = new pc.Vec3( i2991[3], i2991[4], i2991[5] )
  return i2990
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i2994 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i2995 = data
  var i2997 = i2995[0]
  var i2996 = []
  for(var i = 0; i < i2997.length; i += 1) {
    i2996.push( i2997[i + 0] );
  }
  i2994.genericBindings = i2996
  var i2999 = i2995[1]
  var i2998 = []
  for(var i = 0; i < i2999.length; i += 1) {
    i2998.push( i2999[i + 0] );
  }
  i2994.pptrCurveMapping = i2998
  return i2994
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i3000 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i3001 = data
  i3000.name = i3001[0]
  i3000.ascent = i3001[1]
  i3000.originalLineHeight = i3001[2]
  i3000.fontSize = i3001[3]
  var i3003 = i3001[4]
  var i3002 = []
  for(var i = 0; i < i3003.length; i += 1) {
    i3002.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i3003[i + 0]) );
  }
  i3000.characterInfo = i3002
  request.r(i3001[5], i3001[6], 0, i3000, 'texture')
  i3000.originalFontSize = i3001[7]
  return i3000
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i3006 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i3007 = data
  i3006.index = i3007[0]
  i3006.advance = i3007[1]
  i3006.bearing = i3007[2]
  i3006.glyphWidth = i3007[3]
  i3006.glyphHeight = i3007[4]
  i3006.minX = i3007[5]
  i3006.maxX = i3007[6]
  i3006.minY = i3007[7]
  i3006.maxY = i3007[8]
  i3006.uvBottomLeftX = i3007[9]
  i3006.uvBottomLeftY = i3007[10]
  i3006.uvBottomRightX = i3007[11]
  i3006.uvBottomRightY = i3007[12]
  i3006.uvTopLeftX = i3007[13]
  i3006.uvTopLeftY = i3007[14]
  i3006.uvTopRightX = i3007[15]
  i3006.uvTopRightY = i3007[16]
  return i3006
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i3008 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i3009 = data
  i3008.name = i3009[0]
  var i3011 = i3009[1]
  var i3010 = []
  for(var i = 0; i < i3011.length; i += 1) {
    i3010.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i3011[i + 0]) );
  }
  i3008.layers = i3010
  var i3013 = i3009[2]
  var i3012 = []
  for(var i = 0; i < i3013.length; i += 1) {
    i3012.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i3013[i + 0]) );
  }
  i3008.parameters = i3012
  i3008.animationClips = i3009[3]
  i3008.avatarUnsupported = i3009[4]
  return i3008
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i3016 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i3017 = data
  i3016.name = i3017[0]
  i3016.defaultWeight = i3017[1]
  i3016.blendingMode = i3017[2]
  i3016.avatarMask = i3017[3]
  i3016.syncedLayerIndex = i3017[4]
  i3016.syncedLayerAffectsTiming = !!i3017[5]
  i3016.syncedLayers = i3017[6]
  i3016.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i3017[7], i3016.stateMachine)
  return i3016
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i3018 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i3019 = data
  i3018.id = i3019[0]
  i3018.name = i3019[1]
  i3018.path = i3019[2]
  var i3021 = i3019[3]
  var i3020 = []
  for(var i = 0; i < i3021.length; i += 1) {
    i3020.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i3021[i + 0]) );
  }
  i3018.states = i3020
  var i3023 = i3019[4]
  var i3022 = []
  for(var i = 0; i < i3023.length; i += 1) {
    i3022.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i3023[i + 0]) );
  }
  i3018.machines = i3022
  var i3025 = i3019[5]
  var i3024 = []
  for(var i = 0; i < i3025.length; i += 1) {
    i3024.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i3025[i + 0]) );
  }
  i3018.entryStateTransitions = i3024
  var i3027 = i3019[6]
  var i3026 = []
  for(var i = 0; i < i3027.length; i += 1) {
    i3026.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i3027[i + 0]) );
  }
  i3018.exitStateTransitions = i3026
  var i3029 = i3019[7]
  var i3028 = []
  for(var i = 0; i < i3029.length; i += 1) {
    i3028.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i3029[i + 0]) );
  }
  i3018.anyStateTransitions = i3028
  i3018.defaultStateId = i3019[8]
  return i3018
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i3032 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i3033 = data
  i3032.id = i3033[0]
  i3032.name = i3033[1]
  i3032.cycleOffset = i3033[2]
  i3032.cycleOffsetParameter = i3033[3]
  i3032.cycleOffsetParameterActive = !!i3033[4]
  i3032.mirror = !!i3033[5]
  i3032.mirrorParameter = i3033[6]
  i3032.mirrorParameterActive = !!i3033[7]
  i3032.motionId = i3033[8]
  i3032.nameHash = i3033[9]
  i3032.fullPathHash = i3033[10]
  i3032.speed = i3033[11]
  i3032.speedParameter = i3033[12]
  i3032.speedParameterActive = !!i3033[13]
  i3032.tag = i3033[14]
  i3032.tagHash = i3033[15]
  i3032.writeDefaultValues = !!i3033[16]
  var i3035 = i3033[17]
  var i3034 = []
  for(var i = 0; i < i3035.length; i += 2) {
  request.r(i3035[i + 0], i3035[i + 1], 2, i3034, '')
  }
  i3032.behaviours = i3034
  var i3037 = i3033[18]
  var i3036 = []
  for(var i = 0; i < i3037.length; i += 1) {
    i3036.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i3037[i + 0]) );
  }
  i3032.transitions = i3036
  return i3032
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i3042 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i3043 = data
  i3042.fullPath = i3043[0]
  i3042.canTransitionToSelf = !!i3043[1]
  i3042.duration = i3043[2]
  i3042.exitTime = i3043[3]
  i3042.hasExitTime = !!i3043[4]
  i3042.hasFixedDuration = !!i3043[5]
  i3042.interruptionSource = i3043[6]
  i3042.offset = i3043[7]
  i3042.orderedInterruption = !!i3043[8]
  i3042.destinationStateId = i3043[9]
  i3042.isExit = !!i3043[10]
  i3042.mute = !!i3043[11]
  i3042.solo = !!i3043[12]
  var i3045 = i3043[13]
  var i3044 = []
  for(var i = 0; i < i3045.length; i += 1) {
    i3044.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i3045[i + 0]) );
  }
  i3042.conditions = i3044
  return i3042
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i3048 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i3049 = data
  i3048.mode = i3049[0]
  i3048.parameter = i3049[1]
  i3048.threshold = i3049[2]
  return i3048
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i3054 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i3055 = data
  i3054.destinationStateId = i3055[0]
  i3054.isExit = !!i3055[1]
  i3054.mute = !!i3055[2]
  i3054.solo = !!i3055[3]
  var i3057 = i3055[4]
  var i3056 = []
  for(var i = 0; i < i3057.length; i += 1) {
    i3056.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i3057[i + 0]) );
  }
  i3054.conditions = i3056
  return i3054
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i3060 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i3061 = data
  i3060.defaultBool = !!i3061[0]
  i3060.defaultFloat = i3061[1]
  i3060.defaultInt = i3061[2]
  i3060.name = i3061[3]
  i3060.nameHash = i3061[4]
  i3060.type = i3061[5]
  return i3060
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i3062 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i3063 = data
  var i3065 = i3063[0]
  var i3064 = []
  for(var i = 0; i < i3065.length; i += 1) {
    i3064.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i3065[i + 0]) );
  }
  i3062.files = i3064
  i3062.componentToPrefabIds = i3063[1]
  return i3062
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i3068 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i3069 = data
  i3068.path = i3069[0]
  request.r(i3069[1], i3069[2], 0, i3068, 'unityObject')
  return i3068
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i3070 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i3071 = data
  var i3073 = i3071[0]
  var i3072 = []
  for(var i = 0; i < i3073.length; i += 1) {
    i3072.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i3073[i + 0]) );
  }
  i3070.scriptsExecutionOrder = i3072
  var i3075 = i3071[1]
  var i3074 = []
  for(var i = 0; i < i3075.length; i += 1) {
    i3074.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i3075[i + 0]) );
  }
  i3070.sortingLayers = i3074
  var i3077 = i3071[2]
  var i3076 = []
  for(var i = 0; i < i3077.length; i += 1) {
    i3076.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i3077[i + 0]) );
  }
  i3070.cullingLayers = i3076
  i3070.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i3071[3], i3070.timeSettings)
  i3070.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i3071[4], i3070.physicsSettings)
  i3070.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i3071[5], i3070.physics2DSettings)
  i3070.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i3071[6], i3070.qualitySettings)
  i3070.enableRealtimeShadows = !!i3071[7]
  i3070.enableAutoInstancing = !!i3071[8]
  i3070.enableStaticBatching = !!i3071[9]
  i3070.enableDynamicBatching = !!i3071[10]
  i3070.usePreservativeDynamicBatching = !!i3071[11]
  i3070.lightmapEncodingQuality = i3071[12]
  i3070.desiredColorSpace = i3071[13]
  var i3079 = i3071[14]
  var i3078 = []
  for(var i = 0; i < i3079.length; i += 1) {
    i3078.push( i3079[i + 0] );
  }
  i3070.allTags = i3078
  return i3070
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i3082 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i3083 = data
  i3082.name = i3083[0]
  i3082.value = i3083[1]
  return i3082
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i3086 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i3087 = data
  i3086.id = i3087[0]
  i3086.name = i3087[1]
  i3086.value = i3087[2]
  return i3086
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i3090 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i3091 = data
  i3090.id = i3091[0]
  i3090.name = i3091[1]
  return i3090
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i3092 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i3093 = data
  i3092.fixedDeltaTime = i3093[0]
  i3092.maximumDeltaTime = i3093[1]
  i3092.timeScale = i3093[2]
  i3092.maximumParticleTimestep = i3093[3]
  return i3092
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i3094 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i3095 = data
  i3094.gravity = new pc.Vec3( i3095[0], i3095[1], i3095[2] )
  i3094.defaultSolverIterations = i3095[3]
  i3094.bounceThreshold = i3095[4]
  i3094.autoSyncTransforms = !!i3095[5]
  i3094.autoSimulation = !!i3095[6]
  var i3097 = i3095[7]
  var i3096 = []
  for(var i = 0; i < i3097.length; i += 1) {
    i3096.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i3097[i + 0]) );
  }
  i3094.collisionMatrix = i3096
  return i3094
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i3100 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i3101 = data
  i3100.enabled = !!i3101[0]
  i3100.layerId = i3101[1]
  i3100.otherLayerId = i3101[2]
  return i3100
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i3102 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i3103 = data
  request.r(i3103[0], i3103[1], 0, i3102, 'material')
  i3102.gravity = new pc.Vec2( i3103[2], i3103[3] )
  i3102.positionIterations = i3103[4]
  i3102.velocityIterations = i3103[5]
  i3102.velocityThreshold = i3103[6]
  i3102.maxLinearCorrection = i3103[7]
  i3102.maxAngularCorrection = i3103[8]
  i3102.maxTranslationSpeed = i3103[9]
  i3102.maxRotationSpeed = i3103[10]
  i3102.baumgarteScale = i3103[11]
  i3102.baumgarteTOIScale = i3103[12]
  i3102.timeToSleep = i3103[13]
  i3102.linearSleepTolerance = i3103[14]
  i3102.angularSleepTolerance = i3103[15]
  i3102.defaultContactOffset = i3103[16]
  i3102.autoSimulation = !!i3103[17]
  i3102.queriesHitTriggers = !!i3103[18]
  i3102.queriesStartInColliders = !!i3103[19]
  i3102.callbacksOnDisable = !!i3103[20]
  i3102.reuseCollisionCallbacks = !!i3103[21]
  i3102.autoSyncTransforms = !!i3103[22]
  var i3105 = i3103[23]
  var i3104 = []
  for(var i = 0; i < i3105.length; i += 1) {
    i3104.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i3105[i + 0]) );
  }
  i3102.collisionMatrix = i3104
  return i3102
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i3108 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i3109 = data
  i3108.enabled = !!i3109[0]
  i3108.layerId = i3109[1]
  i3108.otherLayerId = i3109[2]
  return i3108
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i3110 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i3111 = data
  var i3113 = i3111[0]
  var i3112 = []
  for(var i = 0; i < i3113.length; i += 1) {
    i3112.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i3113[i + 0]) );
  }
  i3110.qualityLevels = i3112
  var i3115 = i3111[1]
  var i3114 = []
  for(var i = 0; i < i3115.length; i += 1) {
    i3114.push( i3115[i + 0] );
  }
  i3110.names = i3114
  i3110.shadows = i3111[2]
  i3110.anisotropicFiltering = i3111[3]
  i3110.antiAliasing = i3111[4]
  i3110.lodBias = i3111[5]
  i3110.shadowCascades = i3111[6]
  i3110.shadowDistance = i3111[7]
  i3110.shadowmaskMode = i3111[8]
  i3110.shadowProjection = i3111[9]
  i3110.shadowResolution = i3111[10]
  i3110.softParticles = !!i3111[11]
  i3110.softVegetation = !!i3111[12]
  i3110.activeColorSpace = i3111[13]
  i3110.desiredColorSpace = i3111[14]
  i3110.masterTextureLimit = i3111[15]
  i3110.maxQueuedFrames = i3111[16]
  i3110.particleRaycastBudget = i3111[17]
  i3110.pixelLightCount = i3111[18]
  i3110.realtimeReflectionProbes = !!i3111[19]
  i3110.shadowCascade2Split = i3111[20]
  i3110.shadowCascade4Split = new pc.Vec3( i3111[21], i3111[22], i3111[23] )
  i3110.streamingMipmapsActive = !!i3111[24]
  i3110.vSyncCount = i3111[25]
  i3110.asyncUploadBufferSize = i3111[26]
  i3110.asyncUploadTimeSlice = i3111[27]
  i3110.billboardsFaceCameraPosition = !!i3111[28]
  i3110.shadowNearPlaneOffset = i3111[29]
  i3110.streamingMipmapsMemoryBudget = i3111[30]
  i3110.maximumLODLevel = i3111[31]
  i3110.streamingMipmapsAddAllCameras = !!i3111[32]
  i3110.streamingMipmapsMaxLevelReduction = i3111[33]
  i3110.streamingMipmapsRenderersPerFrame = i3111[34]
  i3110.resolutionScalingFixedDPIFactor = i3111[35]
  i3110.streamingMipmapsMaxFileIORequests = i3111[36]
  i3110.currentQualityLevel = i3111[37]
  return i3110
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar"] = function (request, data, root) {
  var i3118 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar' )
  var i3119 = data
  i3118.name = i3119[0]
  var i3121 = i3119[1]
  var i3120 = []
  for(var i = 0; i < i3121.length; i += 1) {
    i3120.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair', i3121[i + 0]) );
  }
  i3118.tos = i3120
  var i3123 = i3119[2]
  var i3122 = []
  for(var i = 0; i < i3123.length; i += 1) {
    i3122.push( i3123[i + 0] );
  }
  i3118.constant = i3122
  i3118.isValid = !!i3119[3]
  i3118.isHuman = !!i3119[4]
  i3118.hasRootMotion = !!i3119[5]
  return i3118
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair"] = function (request, data, root) {
  var i3126 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair' )
  var i3127 = data
  i3126.hash = i3127[0]
  i3126.path = i3127[1]
  return i3126
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i3130 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i3131 = data
  i3130.weight = i3131[0]
  i3130.vertices = i3131[1]
  i3130.normals = i3131[2]
  i3130.tangents = i3131[3]
  return i3130
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Light":{"type":0,"color":1,"cullingMask":5,"intensity":6,"range":7,"spotAngle":8,"shadows":9,"shadowNormalBias":10,"shadowBias":11,"shadowStrength":12,"shadowResolution":13,"lightmapBakeType":14,"renderMode":15,"cookie":16,"cookieSize":18,"shadowNearPlane":19,"occlusionMaskChannel":20,"isBaked":21,"mixedLightingMode":22,"enabled":23},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider":{"center":0,"radius":3,"height":4,"direction":5,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody":{"mass":0,"drag":1,"angularDrag":2,"useGravity":3,"isKinematic":4,"constraints":5,"maxAngularVelocity":6,"collisionDetectionMode":7,"interpolation":8},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer":{"sharedMesh":0,"bones":2,"updateWhenOffscreen":3,"localBounds":4,"rootBone":5,"blendShapesWeights":7,"enabled":8,"sharedMaterial":9,"sharedMaterials":11,"receiveShadows":12,"shadowCastingMode":13,"sortingLayerID":14,"sortingOrder":15,"lightmapIndex":16,"lightmapSceneIndex":17,"lightmapScaleOffset":18,"lightProbeUsage":22,"reflectionProbeUsage":23},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight":{"weight":0},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar":{"name":0,"tos":1,"constant":2,"isValid":3,"isHuman":4,"hasRootMotion":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair":{"hash":0,"path":1},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"48":[49],"50":[49],"51":[49],"52":[49],"53":[49],"54":[49],"55":[20],"56":[22],"57":[9],"58":[9],"59":[9],"60":[9],"61":[9],"62":[9],"63":[64],"65":[64],"66":[64],"67":[64],"68":[64],"69":[64],"70":[64],"71":[64],"72":[64],"73":[64],"74":[64],"75":[64],"76":[64],"77":[22],"78":[5],"79":[80],"81":[80],"27":[26],"82":[26],"83":[31,26],"84":[5],"85":[31,26],"86":[26],"87":[26],"88":[5,26],"89":[26,31],"90":[91],"92":[91],"93":[91],"94":[26],"95":[26],"30":[27],"32":[31,26],"96":[26],"29":[27],"97":[26],"98":[26],"99":[26],"100":[26],"101":[26],"102":[26],"103":[26],"104":[26],"105":[26],"106":[31,26],"107":[26],"108":[26],"109":[26],"110":[26],"36":[31,26],"111":[26],"112":[45],"113":[45],"46":[45],"114":[45],"115":[22],"116":[22]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Light","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","UnityEngine.Material","UnityEngine.BoxCollider","UnityEngine.CapsuleCollider","UnityEngine.Rigidbody","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","UnityEngine.Avatar","UnityEngine.MonoBehaviour","CharacterMovement","PlayableDynamicJoystick","CameraFollower","UnityEngine.GameObject","Player","UnityEngine.Transform","UnityEngine.SkinnedMeshRenderer","UnityEngine.AudioSource","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.Sprite","UnityEngine.UI.Button","UIManager","UnityEngine.UI.Text","UnityEngine.Font","UnityEngine.UI.Outline","GameController","Shelf","Book","Door","AudioManager","UnityEngine.AudioClip","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.Cubemap","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.ScrollRect","UnityEngine.UI.Scrollbar","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.81f1";

Deserializers.productName = "Library_Ad";

Deserializers.lunaInitializationTime = "08/12/2026 02:04:01";

Deserializers.lunaDaysRunning = "8.4";

Deserializers.lunaVersion = "7.2.0";

Deserializers.lunaSHA = "ea08d29afe2968efcb8d91d5624f033c6485cc68";

Deserializers.creativeName = "new_lib_1024_1";

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

Deserializers.runtimeAnalysisExcludedModules = "physics2d, reflection, prefabs";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "StandaloneWindows64";

Deserializers.applicationIdentifier = "com.DefaultCompany.3D-Project";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 24;

Deserializers.linearColorSpace = true;

Deserializers.buildID = "788c34fd-8a57-444f-ba69-c369a2561a66";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

