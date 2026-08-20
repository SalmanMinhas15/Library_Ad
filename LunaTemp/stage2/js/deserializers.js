var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i3654 = root || request.c( 'UnityEngine.JointSpring' )
  var i3655 = data
  i3654.spring = i3655[0]
  i3654.damper = i3655[1]
  i3654.targetPosition = i3655[2]
  return i3654
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i3656 = root || request.c( 'UnityEngine.JointMotor' )
  var i3657 = data
  i3656.m_TargetVelocity = i3657[0]
  i3656.m_Force = i3657[1]
  i3656.m_FreeSpin = i3657[2]
  return i3656
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i3658 = root || request.c( 'UnityEngine.JointLimits' )
  var i3659 = data
  i3658.m_Min = i3659[0]
  i3658.m_Max = i3659[1]
  i3658.m_Bounciness = i3659[2]
  i3658.m_BounceMinVelocity = i3659[3]
  i3658.m_ContactDistance = i3659[4]
  i3658.minBounce = i3659[5]
  i3658.maxBounce = i3659[6]
  return i3658
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i3660 = root || request.c( 'UnityEngine.JointDrive' )
  var i3661 = data
  i3660.m_PositionSpring = i3661[0]
  i3660.m_PositionDamper = i3661[1]
  i3660.m_MaximumForce = i3661[2]
  i3660.m_UseAcceleration = i3661[3]
  return i3660
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i3662 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i3663 = data
  i3662.m_Spring = i3663[0]
  i3662.m_Damper = i3663[1]
  return i3662
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i3664 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i3665 = data
  i3664.m_Limit = i3665[0]
  i3664.m_Bounciness = i3665[1]
  i3664.m_ContactDistance = i3665[2]
  return i3664
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i3666 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i3667 = data
  i3666.m_ExtremumSlip = i3667[0]
  i3666.m_ExtremumValue = i3667[1]
  i3666.m_AsymptoteSlip = i3667[2]
  i3666.m_AsymptoteValue = i3667[3]
  i3666.m_Stiffness = i3667[4]
  return i3666
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i3668 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i3669 = data
  i3668.m_LowerAngle = i3669[0]
  i3668.m_UpperAngle = i3669[1]
  return i3668
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i3670 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i3671 = data
  i3670.m_MotorSpeed = i3671[0]
  i3670.m_MaximumMotorTorque = i3671[1]
  return i3670
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i3672 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i3673 = data
  i3672.m_DampingRatio = i3673[0]
  i3672.m_Frequency = i3673[1]
  i3672.m_Angle = i3673[2]
  return i3672
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i3674 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i3675 = data
  i3674.m_LowerTranslation = i3675[0]
  i3674.m_UpperTranslation = i3675[1]
  return i3674
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i3676 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i3677 = data
  i3676.name = i3677[0]
  i3676.halfPrecision = !!i3677[1]
  i3676.useSimplification = !!i3677[2]
  i3676.useUInt32IndexFormat = !!i3677[3]
  i3676.vertexCount = i3677[4]
  i3676.aabb = i3677[5]
  var i3679 = i3677[6]
  var i3678 = []
  for(var i = 0; i < i3679.length; i += 1) {
    i3678.push( !!i3679[i + 0] );
  }
  i3676.streams = i3678
  i3676.vertices = i3677[7]
  var i3681 = i3677[8]
  var i3680 = []
  for(var i = 0; i < i3681.length; i += 1) {
    i3680.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i3681[i + 0]) );
  }
  i3676.subMeshes = i3680
  var i3683 = i3677[9]
  var i3682 = []
  for(var i = 0; i < i3683.length; i += 16) {
    i3682.push( new pc.Mat4().setData(i3683[i + 0], i3683[i + 1], i3683[i + 2], i3683[i + 3],  i3683[i + 4], i3683[i + 5], i3683[i + 6], i3683[i + 7],  i3683[i + 8], i3683[i + 9], i3683[i + 10], i3683[i + 11],  i3683[i + 12], i3683[i + 13], i3683[i + 14], i3683[i + 15]) );
  }
  i3676.bindposes = i3682
  var i3685 = i3677[10]
  var i3684 = []
  for(var i = 0; i < i3685.length; i += 1) {
    i3684.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i3685[i + 0]) );
  }
  i3676.blendShapes = i3684
  return i3676
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i3690 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i3691 = data
  i3690.triangles = i3691[0]
  return i3690
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i3696 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i3697 = data
  i3696.name = i3697[0]
  var i3699 = i3697[1]
  var i3698 = []
  for(var i = 0; i < i3699.length; i += 1) {
    i3698.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i3699[i + 0]) );
  }
  i3696.frames = i3698
  return i3696
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i3700 = root || new pc.UnityMaterial()
  var i3701 = data
  i3700.name = i3701[0]
  request.r(i3701[1], i3701[2], 0, i3700, 'shader')
  i3700.renderQueue = i3701[3]
  i3700.enableInstancing = !!i3701[4]
  var i3703 = i3701[5]
  var i3702 = []
  for(var i = 0; i < i3703.length; i += 1) {
    i3702.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i3703[i + 0]) );
  }
  i3700.floatParameters = i3702
  var i3705 = i3701[6]
  var i3704 = []
  for(var i = 0; i < i3705.length; i += 1) {
    i3704.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i3705[i + 0]) );
  }
  i3700.colorParameters = i3704
  var i3707 = i3701[7]
  var i3706 = []
  for(var i = 0; i < i3707.length; i += 1) {
    i3706.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i3707[i + 0]) );
  }
  i3700.vectorParameters = i3706
  var i3709 = i3701[8]
  var i3708 = []
  for(var i = 0; i < i3709.length; i += 1) {
    i3708.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i3709[i + 0]) );
  }
  i3700.textureParameters = i3708
  var i3711 = i3701[9]
  var i3710 = []
  for(var i = 0; i < i3711.length; i += 1) {
    i3710.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i3711[i + 0]) );
  }
  i3700.materialFlags = i3710
  return i3700
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i3714 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i3715 = data
  i3714.name = i3715[0]
  i3714.value = i3715[1]
  return i3714
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i3718 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i3719 = data
  i3718.name = i3719[0]
  i3718.value = new pc.Color(i3719[1], i3719[2], i3719[3], i3719[4])
  return i3718
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i3722 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i3723 = data
  i3722.name = i3723[0]
  i3722.value = new pc.Vec4( i3723[1], i3723[2], i3723[3], i3723[4] )
  return i3722
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i3726 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i3727 = data
  i3726.name = i3727[0]
  request.r(i3727[1], i3727[2], 0, i3726, 'value')
  return i3726
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i3730 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i3731 = data
  i3730.name = i3731[0]
  i3730.enabled = !!i3731[1]
  return i3730
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i3732 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i3733 = data
  i3732.name = i3733[0]
  i3732.width = i3733[1]
  i3732.height = i3733[2]
  i3732.mipmapCount = i3733[3]
  i3732.anisoLevel = i3733[4]
  i3732.filterMode = i3733[5]
  i3732.hdr = !!i3733[6]
  i3732.format = i3733[7]
  i3732.wrapMode = i3733[8]
  i3732.alphaIsTransparency = !!i3733[9]
  i3732.alphaSource = i3733[10]
  i3732.graphicsFormat = i3733[11]
  i3732.sRGBTexture = !!i3733[12]
  i3732.desiredColorSpace = i3733[13]
  i3732.wrapU = i3733[14]
  i3732.wrapV = i3733[15]
  return i3732
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i3734 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i3735 = data
  i3734.name = i3735[0]
  i3734.atlasId = i3735[1]
  i3734.mipmapCount = i3735[2]
  i3734.hdr = !!i3735[3]
  i3734.size = i3735[4]
  i3734.anisoLevel = i3735[5]
  i3734.filterMode = i3735[6]
  var i3737 = i3735[7]
  var i3736 = []
  for(var i = 0; i < i3737.length; i += 4) {
    i3736.push( UnityEngine.Rect.MinMaxRect(i3737[i + 0], i3737[i + 1], i3737[i + 2], i3737[i + 3]) );
  }
  i3734.rects = i3736
  i3734.wrapU = i3735[8]
  i3734.wrapV = i3735[9]
  return i3734
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i3740 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i3741 = data
  i3740.name = i3741[0]
  i3740.index = i3741[1]
  i3740.startup = !!i3741[2]
  return i3740
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i3742 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i3743 = data
  i3742.type = i3743[0]
  i3742.color = new pc.Color(i3743[1], i3743[2], i3743[3], i3743[4])
  i3742.cullingMask = i3743[5]
  i3742.intensity = i3743[6]
  i3742.range = i3743[7]
  i3742.spotAngle = i3743[8]
  i3742.shadows = i3743[9]
  i3742.shadowNormalBias = i3743[10]
  i3742.shadowBias = i3743[11]
  i3742.shadowStrength = i3743[12]
  i3742.shadowResolution = i3743[13]
  i3742.lightmapBakeType = i3743[14]
  i3742.renderMode = i3743[15]
  request.r(i3743[16], i3743[17], 0, i3742, 'cookie')
  i3742.cookieSize = i3743[18]
  i3742.shadowNearPlane = i3743[19]
  i3742.occlusionMaskChannel = i3743[20]
  i3742.isBaked = !!i3743[21]
  i3742.mixedLightingMode = i3743[22]
  i3742.enabled = !!i3743[23]
  return i3742
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i3744 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i3745 = data
  i3744.name = i3745[0]
  i3744.tagId = i3745[1]
  i3744.enabled = !!i3745[2]
  i3744.isStatic = !!i3745[3]
  i3744.layer = i3745[4]
  return i3744
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i3746 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i3747 = data
  request.r(i3747[0], i3747[1], 0, i3746, 'sharedMesh')
  return i3746
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i3748 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i3749 = data
  request.r(i3749[0], i3749[1], 0, i3748, 'additionalVertexStreams')
  i3748.enabled = !!i3749[2]
  request.r(i3749[3], i3749[4], 0, i3748, 'sharedMaterial')
  var i3751 = i3749[5]
  var i3750 = []
  for(var i = 0; i < i3751.length; i += 2) {
  request.r(i3751[i + 0], i3751[i + 1], 2, i3750, '')
  }
  i3748.sharedMaterials = i3750
  i3748.receiveShadows = !!i3749[6]
  i3748.shadowCastingMode = i3749[7]
  i3748.sortingLayerID = i3749[8]
  i3748.sortingOrder = i3749[9]
  i3748.lightmapIndex = i3749[10]
  i3748.lightmapSceneIndex = i3749[11]
  i3748.lightmapScaleOffset = new pc.Vec4( i3749[12], i3749[13], i3749[14], i3749[15] )
  i3748.lightProbeUsage = i3749[16]
  i3748.reflectionProbeUsage = i3749[17]
  return i3748
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i3754 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i3755 = data
  i3754.center = new pc.Vec3( i3755[0], i3755[1], i3755[2] )
  i3754.size = new pc.Vec3( i3755[3], i3755[4], i3755[5] )
  i3754.enabled = !!i3755[6]
  i3754.isTrigger = !!i3755[7]
  request.r(i3755[8], i3755[9], 0, i3754, 'material')
  return i3754
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider"] = function (request, data, root) {
  var i3756 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider' )
  var i3757 = data
  i3756.center = new pc.Vec3( i3757[0], i3757[1], i3757[2] )
  i3756.radius = i3757[3]
  i3756.height = i3757[4]
  i3756.direction = i3757[5]
  i3756.enabled = !!i3757[6]
  i3756.isTrigger = !!i3757[7]
  request.r(i3757[8], i3757[9], 0, i3756, 'material')
  return i3756
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i3758 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i3759 = data
  i3758.mass = i3759[0]
  i3758.drag = i3759[1]
  i3758.angularDrag = i3759[2]
  i3758.useGravity = !!i3759[3]
  i3758.isKinematic = !!i3759[4]
  i3758.constraints = i3759[5]
  i3758.maxAngularVelocity = i3759[6]
  i3758.collisionDetectionMode = i3759[7]
  i3758.interpolation = i3759[8]
  return i3758
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i3760 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i3761 = data
  request.r(i3761[0], i3761[1], 0, i3760, 'animatorController')
  request.r(i3761[2], i3761[3], 0, i3760, 'avatar')
  i3760.updateMode = i3761[4]
  i3760.hasTransformHierarchy = !!i3761[5]
  i3760.applyRootMotion = !!i3761[6]
  var i3763 = i3761[7]
  var i3762 = []
  for(var i = 0; i < i3763.length; i += 2) {
  request.r(i3763[i + 0], i3763[i + 1], 2, i3762, '')
  }
  i3760.humanBones = i3762
  i3760.enabled = !!i3761[8]
  return i3760
}

Deserializers["CharacterMovement"] = function (request, data, root) {
  var i3766 = root || request.c( 'CharacterMovement' )
  var i3767 = data
  request.r(i3767[0], i3767[1], 0, i3766, 'joystick')
  request.r(i3767[2], i3767[3], 0, i3766, 'playerCamera')
  request.r(i3767[4], i3767[5], 0, i3766, 'targetMarker')
  i3766.moveSpeed = i3767[6]
  i3766.rotationSpeed = i3767[7]
  i3766.camSwitchingTime = i3767[8]
  i3766.canMove = !!i3767[9]
  request.r(i3767[10], i3767[11], 0, i3766, 'playerAnimator')
  request.r(i3767[12], i3767[13], 0, i3766, 'rb')
  return i3766
}

Deserializers["Player"] = function (request, data, root) {
  var i3768 = root || request.c( 'Player' )
  var i3769 = data
  request.r(i3769[0], i3769[1], 0, i3768, 'headPoint')
  i3768.currentPickedBooks = i3769[2]
  var i3771 = i3769[3]
  var i3770 = []
  for(var i = 0; i < i3771.length; i += 1) {
    i3770.push( request.d('Player+PlayerCatchPoint', i3771[i + 0]) );
  }
  i3768.playerCatchPoints = i3770
  i3768.catchDuration = i3769[4]
  i3768.moveBookDuration = i3769[5]
  return i3768
}

Deserializers["Player+PlayerCatchPoint"] = function (request, data, root) {
  var i3774 = root || request.c( 'Player+PlayerCatchPoint' )
  var i3775 = data
  request.r(i3775[0], i3775[1], 0, i3774, 'catchPoint')
  i3774.isOccupied = !!i3775[2]
  return i3774
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer"] = function (request, data, root) {
  var i3776 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer' )
  var i3777 = data
  request.r(i3777[0], i3777[1], 0, i3776, 'sharedMesh')
  var i3779 = i3777[2]
  var i3778 = []
  for(var i = 0; i < i3779.length; i += 2) {
  request.r(i3779[i + 0], i3779[i + 1], 2, i3778, '')
  }
  i3776.bones = i3778
  i3776.updateWhenOffscreen = !!i3777[3]
  i3776.localBounds = i3777[4]
  request.r(i3777[5], i3777[6], 0, i3776, 'rootBone')
  var i3781 = i3777[7]
  var i3780 = []
  for(var i = 0; i < i3781.length; i += 1) {
    i3780.push( request.d('Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight', i3781[i + 0]) );
  }
  i3776.blendShapesWeights = i3780
  i3776.enabled = !!i3777[8]
  request.r(i3777[9], i3777[10], 0, i3776, 'sharedMaterial')
  var i3783 = i3777[11]
  var i3782 = []
  for(var i = 0; i < i3783.length; i += 2) {
  request.r(i3783[i + 0], i3783[i + 1], 2, i3782, '')
  }
  i3776.sharedMaterials = i3782
  i3776.receiveShadows = !!i3777[12]
  i3776.shadowCastingMode = i3777[13]
  i3776.sortingLayerID = i3777[14]
  i3776.sortingOrder = i3777[15]
  i3776.lightmapIndex = i3777[16]
  i3776.lightmapSceneIndex = i3777[17]
  i3776.lightmapScaleOffset = new pc.Vec4( i3777[18], i3777[19], i3777[20], i3777[21] )
  i3776.lightProbeUsage = i3777[22]
  i3776.reflectionProbeUsage = i3777[23]
  return i3776
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight"] = function (request, data, root) {
  var i3786 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight' )
  var i3787 = data
  i3786.weight = i3787[0]
  return i3786
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i3788 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i3789 = data
  request.r(i3789[0], i3789[1], 0, i3788, 'clip')
  request.r(i3789[2], i3789[3], 0, i3788, 'outputAudioMixerGroup')
  i3788.playOnAwake = !!i3789[4]
  i3788.loop = !!i3789[5]
  i3788.time = i3789[6]
  i3788.volume = i3789[7]
  i3788.pitch = i3789[8]
  i3788.enabled = !!i3789[9]
  return i3788
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i3790 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i3791 = data
  i3790.aspect = i3791[0]
  i3790.orthographic = !!i3791[1]
  i3790.orthographicSize = i3791[2]
  i3790.backgroundColor = new pc.Color(i3791[3], i3791[4], i3791[5], i3791[6])
  i3790.nearClipPlane = i3791[7]
  i3790.farClipPlane = i3791[8]
  i3790.fieldOfView = i3791[9]
  i3790.depth = i3791[10]
  i3790.clearFlags = i3791[11]
  i3790.cullingMask = i3791[12]
  i3790.rect = i3791[13]
  request.r(i3791[14], i3791[15], 0, i3790, 'targetTexture')
  i3790.usePhysicalProperties = !!i3791[16]
  i3790.focalLength = i3791[17]
  i3790.sensorSize = new pc.Vec2( i3791[18], i3791[19] )
  i3790.lensShift = new pc.Vec2( i3791[20], i3791[21] )
  i3790.gateFit = i3791[22]
  i3790.commandBufferCount = i3791[23]
  i3790.cameraType = i3791[24]
  i3790.enabled = !!i3791[25]
  return i3790
}

Deserializers["CameraFollower"] = function (request, data, root) {
  var i3792 = root || request.c( 'CameraFollower' )
  var i3793 = data
  i3792.positionOffset = new pc.Vec3( i3793[0], i3793[1], i3793[2] )
  i3792.followSpeed = i3793[3]
  request.r(i3793[4], i3793[5], 0, i3792, 'character')
  i3792.inRoomPositionOffset = new pc.Vec3( i3793[6], i3793[7], i3793[8] )
  return i3792
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i3794 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i3795 = data
  i3794.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i3795[0], i3794.main)
  i3794.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i3795[1], i3794.colorBySpeed)
  i3794.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i3795[2], i3794.colorOverLifetime)
  i3794.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i3795[3], i3794.emission)
  i3794.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i3795[4], i3794.rotationBySpeed)
  i3794.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i3795[5], i3794.rotationOverLifetime)
  i3794.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i3795[6], i3794.shape)
  i3794.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i3795[7], i3794.sizeBySpeed)
  i3794.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i3795[8], i3794.sizeOverLifetime)
  i3794.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i3795[9], i3794.textureSheetAnimation)
  i3794.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i3795[10], i3794.velocityOverLifetime)
  i3794.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i3795[11], i3794.noise)
  i3794.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i3795[12], i3794.inheritVelocity)
  i3794.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i3795[13], i3794.forceOverLifetime)
  i3794.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i3795[14], i3794.limitVelocityOverLifetime)
  i3794.useAutoRandomSeed = !!i3795[15]
  i3794.randomSeed = i3795[16]
  return i3794
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i3796 = root || new pc.ParticleSystemMain()
  var i3797 = data
  i3796.duration = i3797[0]
  i3796.loop = !!i3797[1]
  i3796.prewarm = !!i3797[2]
  i3796.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3797[3], i3796.startDelay)
  i3796.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3797[4], i3796.startLifetime)
  i3796.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3797[5], i3796.startSpeed)
  i3796.startSize3D = !!i3797[6]
  i3796.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3797[7], i3796.startSizeX)
  i3796.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3797[8], i3796.startSizeY)
  i3796.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3797[9], i3796.startSizeZ)
  i3796.startRotation3D = !!i3797[10]
  i3796.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3797[11], i3796.startRotationX)
  i3796.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3797[12], i3796.startRotationY)
  i3796.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3797[13], i3796.startRotationZ)
  i3796.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i3797[14], i3796.startColor)
  i3796.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3797[15], i3796.gravityModifier)
  i3796.simulationSpace = i3797[16]
  request.r(i3797[17], i3797[18], 0, i3796, 'customSimulationSpace')
  i3796.simulationSpeed = i3797[19]
  i3796.useUnscaledTime = !!i3797[20]
  i3796.scalingMode = i3797[21]
  i3796.playOnAwake = !!i3797[22]
  i3796.maxParticles = i3797[23]
  i3796.emitterVelocityMode = i3797[24]
  i3796.stopAction = i3797[25]
  return i3796
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i3798 = root || new pc.MinMaxCurve()
  var i3799 = data
  i3798.mode = i3799[0]
  i3798.curveMin = new pc.AnimationCurve( { keys_flow: i3799[1] } )
  i3798.curveMax = new pc.AnimationCurve( { keys_flow: i3799[2] } )
  i3798.curveMultiplier = i3799[3]
  i3798.constantMin = i3799[4]
  i3798.constantMax = i3799[5]
  return i3798
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i3800 = root || new pc.MinMaxGradient()
  var i3801 = data
  i3800.mode = i3801[0]
  i3800.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i3801[1], i3800.gradientMin)
  i3800.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i3801[2], i3800.gradientMax)
  i3800.colorMin = new pc.Color(i3801[3], i3801[4], i3801[5], i3801[6])
  i3800.colorMax = new pc.Color(i3801[7], i3801[8], i3801[9], i3801[10])
  return i3800
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i3802 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i3803 = data
  i3802.mode = i3803[0]
  var i3805 = i3803[1]
  var i3804 = []
  for(var i = 0; i < i3805.length; i += 1) {
    i3804.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i3805[i + 0]) );
  }
  i3802.colorKeys = i3804
  var i3807 = i3803[2]
  var i3806 = []
  for(var i = 0; i < i3807.length; i += 1) {
    i3806.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i3807[i + 0]) );
  }
  i3802.alphaKeys = i3806
  return i3802
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i3810 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i3811 = data
  i3810.color = new pc.Color(i3811[0], i3811[1], i3811[2], i3811[3])
  i3810.time = i3811[4]
  return i3810
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i3814 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i3815 = data
  i3814.alpha = i3815[0]
  i3814.time = i3815[1]
  return i3814
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i3816 = root || new pc.ParticleSystemColorBySpeed()
  var i3817 = data
  i3816.enabled = !!i3817[0]
  i3816.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i3817[1], i3816.color)
  i3816.range = new pc.Vec2( i3817[2], i3817[3] )
  return i3816
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i3818 = root || new pc.ParticleSystemColorOverLifetime()
  var i3819 = data
  i3818.enabled = !!i3819[0]
  i3818.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i3819[1], i3818.color)
  return i3818
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i3820 = root || new pc.ParticleSystemEmitter()
  var i3821 = data
  i3820.enabled = !!i3821[0]
  i3820.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3821[1], i3820.rateOverTime)
  i3820.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3821[2], i3820.rateOverDistance)
  var i3823 = i3821[3]
  var i3822 = []
  for(var i = 0; i < i3823.length; i += 1) {
    i3822.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i3823[i + 0]) );
  }
  i3820.bursts = i3822
  return i3820
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i3826 = root || new pc.ParticleSystemBurst()
  var i3827 = data
  i3826.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3827[0], i3826.count)
  i3826.cycleCount = i3827[1]
  i3826.minCount = i3827[2]
  i3826.maxCount = i3827[3]
  i3826.repeatInterval = i3827[4]
  i3826.time = i3827[5]
  return i3826
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i3828 = root || new pc.ParticleSystemRotationBySpeed()
  var i3829 = data
  i3828.enabled = !!i3829[0]
  i3828.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3829[1], i3828.x)
  i3828.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3829[2], i3828.y)
  i3828.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3829[3], i3828.z)
  i3828.separateAxes = !!i3829[4]
  i3828.range = new pc.Vec2( i3829[5], i3829[6] )
  return i3828
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i3830 = root || new pc.ParticleSystemRotationOverLifetime()
  var i3831 = data
  i3830.enabled = !!i3831[0]
  i3830.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3831[1], i3830.x)
  i3830.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3831[2], i3830.y)
  i3830.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3831[3], i3830.z)
  i3830.separateAxes = !!i3831[4]
  return i3830
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i3832 = root || new pc.ParticleSystemShape()
  var i3833 = data
  i3832.enabled = !!i3833[0]
  i3832.shapeType = i3833[1]
  i3832.randomDirectionAmount = i3833[2]
  i3832.sphericalDirectionAmount = i3833[3]
  i3832.randomPositionAmount = i3833[4]
  i3832.alignToDirection = !!i3833[5]
  i3832.radius = i3833[6]
  i3832.radiusMode = i3833[7]
  i3832.radiusSpread = i3833[8]
  i3832.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3833[9], i3832.radiusSpeed)
  i3832.radiusThickness = i3833[10]
  i3832.angle = i3833[11]
  i3832.length = i3833[12]
  i3832.boxThickness = new pc.Vec3( i3833[13], i3833[14], i3833[15] )
  i3832.meshShapeType = i3833[16]
  request.r(i3833[17], i3833[18], 0, i3832, 'mesh')
  request.r(i3833[19], i3833[20], 0, i3832, 'meshRenderer')
  request.r(i3833[21], i3833[22], 0, i3832, 'skinnedMeshRenderer')
  i3832.useMeshMaterialIndex = !!i3833[23]
  i3832.meshMaterialIndex = i3833[24]
  i3832.useMeshColors = !!i3833[25]
  i3832.normalOffset = i3833[26]
  i3832.arc = i3833[27]
  i3832.arcMode = i3833[28]
  i3832.arcSpread = i3833[29]
  i3832.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3833[30], i3832.arcSpeed)
  i3832.donutRadius = i3833[31]
  i3832.position = new pc.Vec3( i3833[32], i3833[33], i3833[34] )
  i3832.rotation = new pc.Vec3( i3833[35], i3833[36], i3833[37] )
  i3832.scale = new pc.Vec3( i3833[38], i3833[39], i3833[40] )
  return i3832
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i3834 = root || new pc.ParticleSystemSizeBySpeed()
  var i3835 = data
  i3834.enabled = !!i3835[0]
  i3834.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3835[1], i3834.x)
  i3834.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3835[2], i3834.y)
  i3834.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3835[3], i3834.z)
  i3834.separateAxes = !!i3835[4]
  i3834.range = new pc.Vec2( i3835[5], i3835[6] )
  return i3834
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i3836 = root || new pc.ParticleSystemSizeOverLifetime()
  var i3837 = data
  i3836.enabled = !!i3837[0]
  i3836.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3837[1], i3836.x)
  i3836.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3837[2], i3836.y)
  i3836.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3837[3], i3836.z)
  i3836.separateAxes = !!i3837[4]
  return i3836
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i3838 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i3839 = data
  i3838.enabled = !!i3839[0]
  i3838.mode = i3839[1]
  i3838.animation = i3839[2]
  i3838.numTilesX = i3839[3]
  i3838.numTilesY = i3839[4]
  i3838.useRandomRow = !!i3839[5]
  i3838.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3839[6], i3838.frameOverTime)
  i3838.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3839[7], i3838.startFrame)
  i3838.cycleCount = i3839[8]
  i3838.rowIndex = i3839[9]
  i3838.flipU = i3839[10]
  i3838.flipV = i3839[11]
  i3838.spriteCount = i3839[12]
  var i3841 = i3839[13]
  var i3840 = []
  for(var i = 0; i < i3841.length; i += 2) {
  request.r(i3841[i + 0], i3841[i + 1], 2, i3840, '')
  }
  i3838.sprites = i3840
  return i3838
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i3844 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i3845 = data
  i3844.enabled = !!i3845[0]
  i3844.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3845[1], i3844.x)
  i3844.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3845[2], i3844.y)
  i3844.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3845[3], i3844.z)
  i3844.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3845[4], i3844.radial)
  i3844.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3845[5], i3844.speedModifier)
  i3844.space = i3845[6]
  i3844.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3845[7], i3844.orbitalX)
  i3844.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3845[8], i3844.orbitalY)
  i3844.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3845[9], i3844.orbitalZ)
  i3844.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3845[10], i3844.orbitalOffsetX)
  i3844.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3845[11], i3844.orbitalOffsetY)
  i3844.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3845[12], i3844.orbitalOffsetZ)
  return i3844
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i3846 = root || new pc.ParticleSystemNoise()
  var i3847 = data
  i3846.enabled = !!i3847[0]
  i3846.separateAxes = !!i3847[1]
  i3846.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3847[2], i3846.strengthX)
  i3846.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3847[3], i3846.strengthY)
  i3846.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3847[4], i3846.strengthZ)
  i3846.frequency = i3847[5]
  i3846.damping = !!i3847[6]
  i3846.octaveCount = i3847[7]
  i3846.octaveMultiplier = i3847[8]
  i3846.octaveScale = i3847[9]
  i3846.quality = i3847[10]
  i3846.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3847[11], i3846.scrollSpeed)
  i3846.scrollSpeedMultiplier = i3847[12]
  i3846.remapEnabled = !!i3847[13]
  i3846.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3847[14], i3846.remapX)
  i3846.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3847[15], i3846.remapY)
  i3846.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3847[16], i3846.remapZ)
  i3846.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3847[17], i3846.positionAmount)
  i3846.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3847[18], i3846.rotationAmount)
  i3846.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3847[19], i3846.sizeAmount)
  return i3846
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i3848 = root || new pc.ParticleSystemInheritVelocity()
  var i3849 = data
  i3848.enabled = !!i3849[0]
  i3848.mode = i3849[1]
  i3848.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3849[2], i3848.curve)
  return i3848
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i3850 = root || new pc.ParticleSystemForceOverLifetime()
  var i3851 = data
  i3850.enabled = !!i3851[0]
  i3850.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3851[1], i3850.x)
  i3850.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3851[2], i3850.y)
  i3850.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3851[3], i3850.z)
  i3850.space = i3851[4]
  i3850.randomized = !!i3851[5]
  return i3850
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i3852 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i3853 = data
  i3852.enabled = !!i3853[0]
  i3852.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3853[1], i3852.limit)
  i3852.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3853[2], i3852.limitX)
  i3852.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3853[3], i3852.limitY)
  i3852.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3853[4], i3852.limitZ)
  i3852.dampen = i3853[5]
  i3852.separateAxes = !!i3853[6]
  i3852.space = i3853[7]
  i3852.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3853[8], i3852.drag)
  i3852.multiplyDragByParticleSize = !!i3853[9]
  i3852.multiplyDragByParticleVelocity = !!i3853[10]
  return i3852
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i3854 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i3855 = data
  request.r(i3855[0], i3855[1], 0, i3854, 'mesh')
  i3854.meshCount = i3855[2]
  i3854.activeVertexStreamsCount = i3855[3]
  i3854.alignment = i3855[4]
  i3854.renderMode = i3855[5]
  i3854.sortMode = i3855[6]
  i3854.lengthScale = i3855[7]
  i3854.velocityScale = i3855[8]
  i3854.cameraVelocityScale = i3855[9]
  i3854.normalDirection = i3855[10]
  i3854.sortingFudge = i3855[11]
  i3854.minParticleSize = i3855[12]
  i3854.maxParticleSize = i3855[13]
  i3854.pivot = new pc.Vec3( i3855[14], i3855[15], i3855[16] )
  request.r(i3855[17], i3855[18], 0, i3854, 'trailMaterial')
  i3854.applyActiveColorSpace = !!i3855[19]
  i3854.enabled = !!i3855[20]
  request.r(i3855[21], i3855[22], 0, i3854, 'sharedMaterial')
  var i3857 = i3855[23]
  var i3856 = []
  for(var i = 0; i < i3857.length; i += 2) {
  request.r(i3857[i + 0], i3857[i + 1], 2, i3856, '')
  }
  i3854.sharedMaterials = i3856
  i3854.receiveShadows = !!i3855[24]
  i3854.shadowCastingMode = i3855[25]
  i3854.sortingLayerID = i3855[26]
  i3854.sortingOrder = i3855[27]
  i3854.lightmapIndex = i3855[28]
  i3854.lightmapSceneIndex = i3855[29]
  i3854.lightmapScaleOffset = new pc.Vec4( i3855[30], i3855[31], i3855[32], i3855[33] )
  i3854.lightProbeUsage = i3855[34]
  i3854.reflectionProbeUsage = i3855[35]
  return i3854
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i3858 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i3859 = data
  i3858.pivot = new pc.Vec2( i3859[0], i3859[1] )
  i3858.anchorMin = new pc.Vec2( i3859[2], i3859[3] )
  i3858.anchorMax = new pc.Vec2( i3859[4], i3859[5] )
  i3858.sizeDelta = new pc.Vec2( i3859[6], i3859[7] )
  i3858.anchoredPosition3D = new pc.Vec3( i3859[8], i3859[9], i3859[10] )
  i3858.rotation = new pc.Quat(i3859[11], i3859[12], i3859[13], i3859[14])
  i3858.scale = new pc.Vec3( i3859[15], i3859[16], i3859[17] )
  return i3858
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i3860 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i3861 = data
  i3860.planeDistance = i3861[0]
  i3860.referencePixelsPerUnit = i3861[1]
  i3860.isFallbackOverlay = !!i3861[2]
  i3860.renderMode = i3861[3]
  i3860.renderOrder = i3861[4]
  i3860.sortingLayerName = i3861[5]
  i3860.sortingOrder = i3861[6]
  i3860.scaleFactor = i3861[7]
  request.r(i3861[8], i3861[9], 0, i3860, 'worldCamera')
  i3860.overrideSorting = !!i3861[10]
  i3860.pixelPerfect = !!i3861[11]
  i3860.targetDisplay = i3861[12]
  i3860.overridePixelPerfect = !!i3861[13]
  i3860.enabled = !!i3861[14]
  return i3860
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i3862 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i3863 = data
  i3862.m_UiScaleMode = i3863[0]
  i3862.m_ReferencePixelsPerUnit = i3863[1]
  i3862.m_ScaleFactor = i3863[2]
  i3862.m_ReferenceResolution = new pc.Vec2( i3863[3], i3863[4] )
  i3862.m_ScreenMatchMode = i3863[5]
  i3862.m_MatchWidthOrHeight = i3863[6]
  i3862.m_PhysicalUnit = i3863[7]
  i3862.m_FallbackScreenDPI = i3863[8]
  i3862.m_DefaultSpriteDPI = i3863[9]
  i3862.m_DynamicPixelsPerUnit = i3863[10]
  i3862.m_PresetInfoIsWorld = !!i3863[11]
  return i3862
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i3864 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i3865 = data
  i3864.m_IgnoreReversedGraphics = !!i3865[0]
  i3864.m_BlockingObjects = i3865[1]
  i3864.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i3865[2] )
  return i3864
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i3866 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i3867 = data
  i3866.cullTransparentMesh = !!i3867[0]
  return i3866
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i3868 = root || request.c( 'UnityEngine.UI.Image' )
  var i3869 = data
  request.r(i3869[0], i3869[1], 0, i3868, 'm_Sprite')
  i3868.m_Type = i3869[2]
  i3868.m_PreserveAspect = !!i3869[3]
  i3868.m_FillCenter = !!i3869[4]
  i3868.m_FillMethod = i3869[5]
  i3868.m_FillAmount = i3869[6]
  i3868.m_FillClockwise = !!i3869[7]
  i3868.m_FillOrigin = i3869[8]
  i3868.m_UseSpriteMesh = !!i3869[9]
  i3868.m_PixelsPerUnitMultiplier = i3869[10]
  request.r(i3869[11], i3869[12], 0, i3868, 'm_Material')
  i3868.m_Maskable = !!i3869[13]
  i3868.m_Color = new pc.Color(i3869[14], i3869[15], i3869[16], i3869[17])
  i3868.m_RaycastTarget = !!i3869[18]
  i3868.m_RaycastPadding = new pc.Vec4( i3869[19], i3869[20], i3869[21], i3869[22] )
  return i3868
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i3870 = root || request.c( 'UnityEngine.UI.Button' )
  var i3871 = data
  i3870.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i3871[0], i3870.m_OnClick)
  i3870.m_Navigation = request.d('UnityEngine.UI.Navigation', i3871[1], i3870.m_Navigation)
  i3870.m_Transition = i3871[2]
  i3870.m_Colors = request.d('UnityEngine.UI.ColorBlock', i3871[3], i3870.m_Colors)
  i3870.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i3871[4], i3870.m_SpriteState)
  i3870.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i3871[5], i3870.m_AnimationTriggers)
  i3870.m_Interactable = !!i3871[6]
  request.r(i3871[7], i3871[8], 0, i3870, 'm_TargetGraphic')
  return i3870
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i3872 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i3873 = data
  i3872.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i3873[0], i3872.m_PersistentCalls)
  return i3872
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i3874 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i3875 = data
  var i3877 = i3875[0]
  var i3876 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i3877.length; i += 1) {
    i3876.add(request.d('UnityEngine.Events.PersistentCall', i3877[i + 0]));
  }
  i3874.m_Calls = i3876
  return i3874
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i3880 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i3881 = data
  request.r(i3881[0], i3881[1], 0, i3880, 'm_Target')
  i3880.m_TargetAssemblyTypeName = i3881[2]
  i3880.m_MethodName = i3881[3]
  i3880.m_Mode = i3881[4]
  i3880.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i3881[5], i3880.m_Arguments)
  i3880.m_CallState = i3881[6]
  return i3880
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i3882 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i3883 = data
  request.r(i3883[0], i3883[1], 0, i3882, 'm_ObjectArgument')
  i3882.m_ObjectArgumentAssemblyTypeName = i3883[2]
  i3882.m_IntArgument = i3883[3]
  i3882.m_FloatArgument = i3883[4]
  i3882.m_StringArgument = i3883[5]
  i3882.m_BoolArgument = !!i3883[6]
  return i3882
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i3884 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i3885 = data
  i3884.m_Mode = i3885[0]
  i3884.m_WrapAround = !!i3885[1]
  request.r(i3885[2], i3885[3], 0, i3884, 'm_SelectOnUp')
  request.r(i3885[4], i3885[5], 0, i3884, 'm_SelectOnDown')
  request.r(i3885[6], i3885[7], 0, i3884, 'm_SelectOnLeft')
  request.r(i3885[8], i3885[9], 0, i3884, 'm_SelectOnRight')
  return i3884
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i3886 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i3887 = data
  i3886.m_NormalColor = new pc.Color(i3887[0], i3887[1], i3887[2], i3887[3])
  i3886.m_HighlightedColor = new pc.Color(i3887[4], i3887[5], i3887[6], i3887[7])
  i3886.m_PressedColor = new pc.Color(i3887[8], i3887[9], i3887[10], i3887[11])
  i3886.m_SelectedColor = new pc.Color(i3887[12], i3887[13], i3887[14], i3887[15])
  i3886.m_DisabledColor = new pc.Color(i3887[16], i3887[17], i3887[18], i3887[19])
  i3886.m_ColorMultiplier = i3887[20]
  i3886.m_FadeDuration = i3887[21]
  return i3886
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i3888 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i3889 = data
  request.r(i3889[0], i3889[1], 0, i3888, 'm_HighlightedSprite')
  request.r(i3889[2], i3889[3], 0, i3888, 'm_PressedSprite')
  request.r(i3889[4], i3889[5], 0, i3888, 'm_SelectedSprite')
  request.r(i3889[6], i3889[7], 0, i3888, 'm_DisabledSprite')
  return i3888
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i3890 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i3891 = data
  i3890.m_NormalTrigger = i3891[0]
  i3890.m_HighlightedTrigger = i3891[1]
  i3890.m_PressedTrigger = i3891[2]
  i3890.m_SelectedTrigger = i3891[3]
  i3890.m_DisabledTrigger = i3891[4]
  return i3890
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i3892 = root || request.c( 'UnityEngine.UI.Text' )
  var i3893 = data
  i3892.m_FontData = request.d('UnityEngine.UI.FontData', i3893[0], i3892.m_FontData)
  i3892.m_Text = i3893[1]
  request.r(i3893[2], i3893[3], 0, i3892, 'm_Material')
  i3892.m_Maskable = !!i3893[4]
  i3892.m_Color = new pc.Color(i3893[5], i3893[6], i3893[7], i3893[8])
  i3892.m_RaycastTarget = !!i3893[9]
  i3892.m_RaycastPadding = new pc.Vec4( i3893[10], i3893[11], i3893[12], i3893[13] )
  return i3892
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i3894 = root || request.c( 'UnityEngine.UI.FontData' )
  var i3895 = data
  request.r(i3895[0], i3895[1], 0, i3894, 'm_Font')
  i3894.m_FontSize = i3895[2]
  i3894.m_FontStyle = i3895[3]
  i3894.m_BestFit = !!i3895[4]
  i3894.m_MinSize = i3895[5]
  i3894.m_MaxSize = i3895[6]
  i3894.m_Alignment = i3895[7]
  i3894.m_AlignByGeometry = !!i3895[8]
  i3894.m_RichText = !!i3895[9]
  i3894.m_HorizontalOverflow = i3895[10]
  i3894.m_VerticalOverflow = i3895[11]
  i3894.m_LineSpacing = i3895[12]
  return i3894
}

Deserializers["UnityEngine.UI.Outline"] = function (request, data, root) {
  var i3896 = root || request.c( 'UnityEngine.UI.Outline' )
  var i3897 = data
  i3896.m_EffectColor = new pc.Color(i3897[0], i3897[1], i3897[2], i3897[3])
  i3896.m_EffectDistance = new pc.Vec2( i3897[4], i3897[5] )
  i3896.m_UseGraphicAlpha = !!i3897[6]
  return i3896
}

Deserializers["UIManager"] = function (request, data, root) {
  var i3898 = root || request.c( 'UIManager' )
  var i3899 = data
  request.r(i3899[0], i3899[1], 0, i3898, 'playerControlPanel')
  request.r(i3899[2], i3899[3], 0, i3898, 'endInstructionPanel')
  request.r(i3899[4], i3899[5], 0, i3898, 'instructionCntnr')
  request.r(i3899[6], i3899[7], 0, i3898, 'instructionText')
  request.r(i3899[8], i3899[9], 0, i3898, 'infoImg')
  request.r(i3899[10], i3899[11], 0, i3898, 'infoTxt')
  return i3898
}

Deserializers["PlayableDynamicJoystick"] = function (request, data, root) {
  var i3900 = root || request.c( 'PlayableDynamicJoystick' )
  var i3901 = data
  i3900.deadZone = i3901[0]
  i3900.handleRange = i3901[1]
  request.r(i3901[2], i3901[3], 0, i3900, 'uiCamera')
  request.r(i3901[4], i3901[5], 0, i3900, 'background')
  request.r(i3901[6], i3901[7], 0, i3900, 'joystickHandle')
  i3900.axisOptions = i3901[8]
  i3900.maxRadius = i3901[9]
  return i3900
}

Deserializers["GameController"] = function (request, data, root) {
  var i3902 = root || request.c( 'GameController' )
  var i3903 = data
  request.r(i3903[0], i3903[1], 0, i3902, 'confettiParticles')
  i3902.totalPlacedBooks = i3903[2]
  request.r(i3903[3], i3903[4], 0, i3902, 'confettiCamera')
  var i3905 = i3903[5]
  var i3904 = []
  for(var i = 0; i < i3905.length; i += 2) {
  request.r(i3905[i + 0], i3905[i + 1], 2, i3904, '')
  }
  i3902.TargetPoins = i3904
  var i3907 = i3903[6]
  var i3906 = []
  for(var i = 0; i < i3907.length; i += 2) {
  request.r(i3907[i + 0], i3907[i + 1], 2, i3906, '')
  }
  i3902.shelfs = i3906
  return i3902
}

Deserializers["Shelf"] = function (request, data, root) {
  var i3912 = root || request.c( 'Shelf' )
  var i3913 = data
  var i3915 = i3913[0]
  var i3914 = []
  for(var i = 0; i < i3915.length; i += 1) {
    i3914.push( request.d('Shelf+ShelfPoint', i3915[i + 0]) );
  }
  i3912.shelfPoints = i3914
  i3912.placedBooksCount = i3913[1]
  request.r(i3913[2], i3913[3], 0, i3912, 'circle')
  request.r(i3913[4], i3913[5], 0, i3912, 'shelf_Cam')
  request.r(i3913[6], i3913[7], 0, i3912, 'playerStandPoint')
  return i3912
}

Deserializers["Shelf+ShelfPoint"] = function (request, data, root) {
  var i3918 = root || request.c( 'Shelf+ShelfPoint' )
  var i3919 = data
  request.r(i3919[0], i3919[1], 0, i3918, 'point')
  i3918.isOccupied = !!i3919[2]
  return i3918
}

Deserializers["Book"] = function (request, data, root) {
  var i3920 = root || request.c( 'Book' )
  var i3921 = data
  return i3920
}

Deserializers["Door"] = function (request, data, root) {
  var i3922 = root || request.c( 'Door' )
  var i3923 = data
  request.r(i3923[0], i3923[1], 0, i3922, 'door_Cam')
  return i3922
}

Deserializers["AudioManager"] = function (request, data, root) {
  var i3924 = root || request.c( 'AudioManager' )
  var i3925 = data
  request.r(i3925[0], i3925[1], 0, i3924, 'bgAS')
  request.r(i3925[2], i3925[3], 0, i3924, 'inGameAS')
  request.r(i3925[4], i3925[5], 0, i3924, 'PickTomato')
  request.r(i3925[6], i3925[7], 0, i3924, 'PopTomato')
  request.r(i3925[8], i3925[9], 0, i3924, 'checkPoint')
  request.r(i3925[10], i3925[11], 0, i3924, 'levelComplete')
  return i3924
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i3926 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i3927 = data
  request.r(i3927[0], i3927[1], 0, i3926, 'm_FirstSelected')
  i3926.m_sendNavigationEvents = !!i3927[2]
  i3926.m_DragThreshold = i3927[3]
  return i3926
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i3928 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i3929 = data
  i3928.m_HorizontalAxis = i3929[0]
  i3928.m_VerticalAxis = i3929[1]
  i3928.m_SubmitButton = i3929[2]
  i3928.m_CancelButton = i3929[3]
  i3928.m_InputActionsPerSecond = i3929[4]
  i3928.m_RepeatDelay = i3929[5]
  i3928.m_ForceModuleActive = !!i3929[6]
  i3928.m_SendPointerHoverToParent = !!i3929[7]
  return i3928
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i3930 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i3931 = data
  i3930.ambientIntensity = i3931[0]
  i3930.reflectionIntensity = i3931[1]
  i3930.ambientMode = i3931[2]
  i3930.ambientLight = new pc.Color(i3931[3], i3931[4], i3931[5], i3931[6])
  i3930.ambientSkyColor = new pc.Color(i3931[7], i3931[8], i3931[9], i3931[10])
  i3930.ambientGroundColor = new pc.Color(i3931[11], i3931[12], i3931[13], i3931[14])
  i3930.ambientEquatorColor = new pc.Color(i3931[15], i3931[16], i3931[17], i3931[18])
  i3930.fogColor = new pc.Color(i3931[19], i3931[20], i3931[21], i3931[22])
  i3930.fogEndDistance = i3931[23]
  i3930.fogStartDistance = i3931[24]
  i3930.fogDensity = i3931[25]
  i3930.fog = !!i3931[26]
  request.r(i3931[27], i3931[28], 0, i3930, 'skybox')
  i3930.fogMode = i3931[29]
  var i3933 = i3931[30]
  var i3932 = []
  for(var i = 0; i < i3933.length; i += 1) {
    i3932.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i3933[i + 0]) );
  }
  i3930.lightmaps = i3932
  i3930.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i3931[31], i3930.lightProbes)
  i3930.lightmapsMode = i3931[32]
  i3930.mixedBakeMode = i3931[33]
  i3930.environmentLightingMode = i3931[34]
  i3930.ambientProbe = new pc.SphericalHarmonicsL2(i3931[35])
  request.r(i3931[36], i3931[37], 0, i3930, 'customReflection')
  request.r(i3931[38], i3931[39], 0, i3930, 'defaultReflection')
  i3930.defaultReflectionMode = i3931[40]
  i3930.defaultReflectionResolution = i3931[41]
  i3930.sunLightObjectId = i3931[42]
  i3930.pixelLightCount = i3931[43]
  i3930.defaultReflectionHDR = !!i3931[44]
  i3930.hasLightDataAsset = !!i3931[45]
  i3930.hasManualGenerate = !!i3931[46]
  return i3930
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i3936 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i3937 = data
  request.r(i3937[0], i3937[1], 0, i3936, 'lightmapColor')
  request.r(i3937[2], i3937[3], 0, i3936, 'lightmapDirection')
  request.r(i3937[4], i3937[5], 0, i3936, 'shadowMask')
  return i3936
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i3938 = root || new UnityEngine.LightProbes()
  var i3939 = data
  return i3938
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i3946 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i3947 = data
  var i3949 = i3947[0]
  var i3948 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i3949.length; i += 1) {
    i3948.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i3949[i + 0]));
  }
  i3946.ShaderCompilationErrors = i3948
  i3946.name = i3947[1]
  i3946.guid = i3947[2]
  var i3951 = i3947[3]
  var i3950 = []
  for(var i = 0; i < i3951.length; i += 1) {
    i3950.push( i3951[i + 0] );
  }
  i3946.shaderDefinedKeywords = i3950
  var i3953 = i3947[4]
  var i3952 = []
  for(var i = 0; i < i3953.length; i += 1) {
    i3952.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i3953[i + 0]) );
  }
  i3946.passes = i3952
  var i3955 = i3947[5]
  var i3954 = []
  for(var i = 0; i < i3955.length; i += 1) {
    i3954.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i3955[i + 0]) );
  }
  i3946.usePasses = i3954
  var i3957 = i3947[6]
  var i3956 = []
  for(var i = 0; i < i3957.length; i += 1) {
    i3956.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i3957[i + 0]) );
  }
  i3946.defaultParameterValues = i3956
  request.r(i3947[7], i3947[8], 0, i3946, 'unityFallbackShader')
  i3946.readDepth = !!i3947[9]
  i3946.hasDepthOnlyPass = !!i3947[10]
  i3946.isCreatedByShaderGraph = !!i3947[11]
  i3946.disableBatching = !!i3947[12]
  i3946.compiled = !!i3947[13]
  return i3946
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i3960 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i3961 = data
  i3960.shaderName = i3961[0]
  i3960.errorMessage = i3961[1]
  return i3960
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i3966 = root || new pc.UnityShaderPass()
  var i3967 = data
  i3966.id = i3967[0]
  i3966.subShaderIndex = i3967[1]
  i3966.name = i3967[2]
  i3966.passType = i3967[3]
  i3966.grabPassTextureName = i3967[4]
  i3966.usePass = !!i3967[5]
  i3966.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3967[6], i3966.zTest)
  i3966.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3967[7], i3966.zWrite)
  i3966.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3967[8], i3966.culling)
  i3966.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i3967[9], i3966.blending)
  i3966.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i3967[10], i3966.alphaBlending)
  i3966.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3967[11], i3966.colorWriteMask)
  i3966.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3967[12], i3966.offsetUnits)
  i3966.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3967[13], i3966.offsetFactor)
  i3966.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3967[14], i3966.stencilRef)
  i3966.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3967[15], i3966.stencilReadMask)
  i3966.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3967[16], i3966.stencilWriteMask)
  i3966.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3967[17], i3966.stencilOp)
  i3966.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3967[18], i3966.stencilOpFront)
  i3966.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3967[19], i3966.stencilOpBack)
  var i3969 = i3967[20]
  var i3968 = []
  for(var i = 0; i < i3969.length; i += 1) {
    i3968.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i3969[i + 0]) );
  }
  i3966.tags = i3968
  var i3971 = i3967[21]
  var i3970 = []
  for(var i = 0; i < i3971.length; i += 1) {
    i3970.push( i3971[i + 0] );
  }
  i3966.passDefinedKeywords = i3970
  var i3973 = i3967[22]
  var i3972 = []
  for(var i = 0; i < i3973.length; i += 1) {
    i3972.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i3973[i + 0]) );
  }
  i3966.passDefinedKeywordGroups = i3972
  var i3975 = i3967[23]
  var i3974 = []
  for(var i = 0; i < i3975.length; i += 1) {
    i3974.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i3975[i + 0]) );
  }
  i3966.variants = i3974
  var i3977 = i3967[24]
  var i3976 = []
  for(var i = 0; i < i3977.length; i += 1) {
    i3976.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i3977[i + 0]) );
  }
  i3966.excludedVariants = i3976
  i3966.hasDepthReader = !!i3967[25]
  return i3966
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i3978 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i3979 = data
  i3978.val = i3979[0]
  i3978.name = i3979[1]
  return i3978
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i3980 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i3981 = data
  i3980.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3981[0], i3980.src)
  i3980.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3981[1], i3980.dst)
  i3980.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3981[2], i3980.op)
  return i3980
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i3982 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i3983 = data
  i3982.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3983[0], i3982.pass)
  i3982.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3983[1], i3982.fail)
  i3982.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3983[2], i3982.zFail)
  i3982.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3983[3], i3982.comp)
  return i3982
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i3986 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i3987 = data
  i3986.name = i3987[0]
  i3986.value = i3987[1]
  return i3986
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i3990 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i3991 = data
  var i3993 = i3991[0]
  var i3992 = []
  for(var i = 0; i < i3993.length; i += 1) {
    i3992.push( i3993[i + 0] );
  }
  i3990.keywords = i3992
  i3990.hasDiscard = !!i3991[1]
  return i3990
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i3996 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i3997 = data
  i3996.passId = i3997[0]
  i3996.subShaderIndex = i3997[1]
  var i3999 = i3997[2]
  var i3998 = []
  for(var i = 0; i < i3999.length; i += 1) {
    i3998.push( i3999[i + 0] );
  }
  i3996.keywords = i3998
  i3996.vertexProgram = i3997[3]
  i3996.fragmentProgram = i3997[4]
  i3996.exportedForWebGl2 = !!i3997[5]
  i3996.readDepth = !!i3997[6]
  return i3996
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i4002 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i4003 = data
  request.r(i4003[0], i4003[1], 0, i4002, 'shader')
  i4002.pass = i4003[2]
  return i4002
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i4006 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i4007 = data
  i4006.name = i4007[0]
  i4006.type = i4007[1]
  i4006.value = new pc.Vec4( i4007[2], i4007[3], i4007[4], i4007[5] )
  i4006.textureValue = i4007[6]
  i4006.shaderPropertyFlag = i4007[7]
  return i4006
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i4008 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i4009 = data
  i4008.name = i4009[0]
  request.r(i4009[1], i4009[2], 0, i4008, 'texture')
  i4008.aabb = i4009[3]
  i4008.vertices = i4009[4]
  i4008.triangles = i4009[5]
  i4008.textureRect = UnityEngine.Rect.MinMaxRect(i4009[6], i4009[7], i4009[8], i4009[9])
  i4008.packedRect = UnityEngine.Rect.MinMaxRect(i4009[10], i4009[11], i4009[12], i4009[13])
  i4008.border = new pc.Vec4( i4009[14], i4009[15], i4009[16], i4009[17] )
  i4008.transparency = i4009[18]
  i4008.bounds = i4009[19]
  i4008.pixelsPerUnit = i4009[20]
  i4008.textureWidth = i4009[21]
  i4008.textureHeight = i4009[22]
  i4008.nativeSize = new pc.Vec2( i4009[23], i4009[24] )
  i4008.pivot = new pc.Vec2( i4009[25], i4009[26] )
  i4008.textureRectOffset = new pc.Vec2( i4009[27], i4009[28] )
  return i4008
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i4010 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i4011 = data
  i4010.name = i4011[0]
  return i4010
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i4012 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i4013 = data
  i4012.name = i4013[0]
  i4012.wrapMode = i4013[1]
  i4012.isLooping = !!i4013[2]
  i4012.length = i4013[3]
  var i4015 = i4013[4]
  var i4014 = []
  for(var i = 0; i < i4015.length; i += 1) {
    i4014.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i4015[i + 0]) );
  }
  i4012.curves = i4014
  var i4017 = i4013[5]
  var i4016 = []
  for(var i = 0; i < i4017.length; i += 1) {
    i4016.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i4017[i + 0]) );
  }
  i4012.events = i4016
  i4012.halfPrecision = !!i4013[6]
  i4012._frameRate = i4013[7]
  i4012.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i4013[8], i4012.localBounds)
  i4012.hasMuscleCurves = !!i4013[9]
  var i4019 = i4013[10]
  var i4018 = []
  for(var i = 0; i < i4019.length; i += 1) {
    i4018.push( i4019[i + 0] );
  }
  i4012.clipMuscleConstant = i4018
  i4012.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i4013[11], i4012.clipBindingConstant)
  return i4012
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i4022 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i4023 = data
  i4022.path = i4023[0]
  i4022.hash = i4023[1]
  i4022.componentType = i4023[2]
  i4022.property = i4023[3]
  i4022.keys = i4023[4]
  var i4025 = i4023[5]
  var i4024 = []
  for(var i = 0; i < i4025.length; i += 1) {
    i4024.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i4025[i + 0]) );
  }
  i4022.objectReferenceKeys = i4024
  return i4022
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i4028 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i4029 = data
  i4028.time = i4029[0]
  request.r(i4029[1], i4029[2], 0, i4028, 'value')
  return i4028
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i4032 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i4033 = data
  i4032.functionName = i4033[0]
  i4032.floatParameter = i4033[1]
  i4032.intParameter = i4033[2]
  i4032.stringParameter = i4033[3]
  request.r(i4033[4], i4033[5], 0, i4032, 'objectReferenceParameter')
  i4032.time = i4033[6]
  return i4032
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i4034 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i4035 = data
  i4034.center = new pc.Vec3( i4035[0], i4035[1], i4035[2] )
  i4034.extends = new pc.Vec3( i4035[3], i4035[4], i4035[5] )
  return i4034
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i4038 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i4039 = data
  var i4041 = i4039[0]
  var i4040 = []
  for(var i = 0; i < i4041.length; i += 1) {
    i4040.push( i4041[i + 0] );
  }
  i4038.genericBindings = i4040
  var i4043 = i4039[1]
  var i4042 = []
  for(var i = 0; i < i4043.length; i += 1) {
    i4042.push( i4043[i + 0] );
  }
  i4038.pptrCurveMapping = i4042
  return i4038
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i4044 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i4045 = data
  i4044.name = i4045[0]
  i4044.ascent = i4045[1]
  i4044.originalLineHeight = i4045[2]
  i4044.fontSize = i4045[3]
  var i4047 = i4045[4]
  var i4046 = []
  for(var i = 0; i < i4047.length; i += 1) {
    i4046.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i4047[i + 0]) );
  }
  i4044.characterInfo = i4046
  request.r(i4045[5], i4045[6], 0, i4044, 'texture')
  i4044.originalFontSize = i4045[7]
  return i4044
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i4050 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i4051 = data
  i4050.index = i4051[0]
  i4050.advance = i4051[1]
  i4050.bearing = i4051[2]
  i4050.glyphWidth = i4051[3]
  i4050.glyphHeight = i4051[4]
  i4050.minX = i4051[5]
  i4050.maxX = i4051[6]
  i4050.minY = i4051[7]
  i4050.maxY = i4051[8]
  i4050.uvBottomLeftX = i4051[9]
  i4050.uvBottomLeftY = i4051[10]
  i4050.uvBottomRightX = i4051[11]
  i4050.uvBottomRightY = i4051[12]
  i4050.uvTopLeftX = i4051[13]
  i4050.uvTopLeftY = i4051[14]
  i4050.uvTopRightX = i4051[15]
  i4050.uvTopRightY = i4051[16]
  return i4050
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i4052 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i4053 = data
  i4052.name = i4053[0]
  var i4055 = i4053[1]
  var i4054 = []
  for(var i = 0; i < i4055.length; i += 1) {
    i4054.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i4055[i + 0]) );
  }
  i4052.layers = i4054
  var i4057 = i4053[2]
  var i4056 = []
  for(var i = 0; i < i4057.length; i += 1) {
    i4056.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i4057[i + 0]) );
  }
  i4052.parameters = i4056
  i4052.animationClips = i4053[3]
  i4052.avatarUnsupported = i4053[4]
  return i4052
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i4060 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i4061 = data
  i4060.name = i4061[0]
  i4060.defaultWeight = i4061[1]
  i4060.blendingMode = i4061[2]
  i4060.avatarMask = i4061[3]
  i4060.syncedLayerIndex = i4061[4]
  i4060.syncedLayerAffectsTiming = !!i4061[5]
  i4060.syncedLayers = i4061[6]
  i4060.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i4061[7], i4060.stateMachine)
  return i4060
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i4062 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i4063 = data
  i4062.id = i4063[0]
  i4062.name = i4063[1]
  i4062.path = i4063[2]
  var i4065 = i4063[3]
  var i4064 = []
  for(var i = 0; i < i4065.length; i += 1) {
    i4064.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i4065[i + 0]) );
  }
  i4062.states = i4064
  var i4067 = i4063[4]
  var i4066 = []
  for(var i = 0; i < i4067.length; i += 1) {
    i4066.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i4067[i + 0]) );
  }
  i4062.machines = i4066
  var i4069 = i4063[5]
  var i4068 = []
  for(var i = 0; i < i4069.length; i += 1) {
    i4068.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i4069[i + 0]) );
  }
  i4062.entryStateTransitions = i4068
  var i4071 = i4063[6]
  var i4070 = []
  for(var i = 0; i < i4071.length; i += 1) {
    i4070.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i4071[i + 0]) );
  }
  i4062.exitStateTransitions = i4070
  var i4073 = i4063[7]
  var i4072 = []
  for(var i = 0; i < i4073.length; i += 1) {
    i4072.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i4073[i + 0]) );
  }
  i4062.anyStateTransitions = i4072
  i4062.defaultStateId = i4063[8]
  return i4062
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i4076 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i4077 = data
  i4076.id = i4077[0]
  i4076.name = i4077[1]
  i4076.cycleOffset = i4077[2]
  i4076.cycleOffsetParameter = i4077[3]
  i4076.cycleOffsetParameterActive = !!i4077[4]
  i4076.mirror = !!i4077[5]
  i4076.mirrorParameter = i4077[6]
  i4076.mirrorParameterActive = !!i4077[7]
  i4076.motionId = i4077[8]
  i4076.nameHash = i4077[9]
  i4076.fullPathHash = i4077[10]
  i4076.speed = i4077[11]
  i4076.speedParameter = i4077[12]
  i4076.speedParameterActive = !!i4077[13]
  i4076.tag = i4077[14]
  i4076.tagHash = i4077[15]
  i4076.writeDefaultValues = !!i4077[16]
  var i4079 = i4077[17]
  var i4078 = []
  for(var i = 0; i < i4079.length; i += 2) {
  request.r(i4079[i + 0], i4079[i + 1], 2, i4078, '')
  }
  i4076.behaviours = i4078
  var i4081 = i4077[18]
  var i4080 = []
  for(var i = 0; i < i4081.length; i += 1) {
    i4080.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i4081[i + 0]) );
  }
  i4076.transitions = i4080
  return i4076
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i4086 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i4087 = data
  i4086.fullPath = i4087[0]
  i4086.canTransitionToSelf = !!i4087[1]
  i4086.duration = i4087[2]
  i4086.exitTime = i4087[3]
  i4086.hasExitTime = !!i4087[4]
  i4086.hasFixedDuration = !!i4087[5]
  i4086.interruptionSource = i4087[6]
  i4086.offset = i4087[7]
  i4086.orderedInterruption = !!i4087[8]
  i4086.destinationStateId = i4087[9]
  i4086.isExit = !!i4087[10]
  i4086.mute = !!i4087[11]
  i4086.solo = !!i4087[12]
  var i4089 = i4087[13]
  var i4088 = []
  for(var i = 0; i < i4089.length; i += 1) {
    i4088.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i4089[i + 0]) );
  }
  i4086.conditions = i4088
  return i4086
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i4092 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i4093 = data
  i4092.mode = i4093[0]
  i4092.parameter = i4093[1]
  i4092.threshold = i4093[2]
  return i4092
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i4098 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i4099 = data
  i4098.destinationStateId = i4099[0]
  i4098.isExit = !!i4099[1]
  i4098.mute = !!i4099[2]
  i4098.solo = !!i4099[3]
  var i4101 = i4099[4]
  var i4100 = []
  for(var i = 0; i < i4101.length; i += 1) {
    i4100.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i4101[i + 0]) );
  }
  i4098.conditions = i4100
  return i4098
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i4104 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i4105 = data
  i4104.defaultBool = !!i4105[0]
  i4104.defaultFloat = i4105[1]
  i4104.defaultInt = i4105[2]
  i4104.name = i4105[3]
  i4104.nameHash = i4105[4]
  i4104.type = i4105[5]
  return i4104
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i4106 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i4107 = data
  var i4109 = i4107[0]
  var i4108 = []
  for(var i = 0; i < i4109.length; i += 1) {
    i4108.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i4109[i + 0]) );
  }
  i4106.files = i4108
  i4106.componentToPrefabIds = i4107[1]
  return i4106
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i4112 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i4113 = data
  i4112.path = i4113[0]
  request.r(i4113[1], i4113[2], 0, i4112, 'unityObject')
  return i4112
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i4114 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i4115 = data
  var i4117 = i4115[0]
  var i4116 = []
  for(var i = 0; i < i4117.length; i += 1) {
    i4116.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i4117[i + 0]) );
  }
  i4114.scriptsExecutionOrder = i4116
  var i4119 = i4115[1]
  var i4118 = []
  for(var i = 0; i < i4119.length; i += 1) {
    i4118.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i4119[i + 0]) );
  }
  i4114.sortingLayers = i4118
  var i4121 = i4115[2]
  var i4120 = []
  for(var i = 0; i < i4121.length; i += 1) {
    i4120.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i4121[i + 0]) );
  }
  i4114.cullingLayers = i4120
  i4114.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i4115[3], i4114.timeSettings)
  i4114.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i4115[4], i4114.physicsSettings)
  i4114.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i4115[5], i4114.physics2DSettings)
  i4114.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i4115[6], i4114.qualitySettings)
  i4114.enableRealtimeShadows = !!i4115[7]
  i4114.enableAutoInstancing = !!i4115[8]
  i4114.enableStaticBatching = !!i4115[9]
  i4114.enableDynamicBatching = !!i4115[10]
  i4114.usePreservativeDynamicBatching = !!i4115[11]
  i4114.lightmapEncodingQuality = i4115[12]
  i4114.desiredColorSpace = i4115[13]
  var i4123 = i4115[14]
  var i4122 = []
  for(var i = 0; i < i4123.length; i += 1) {
    i4122.push( i4123[i + 0] );
  }
  i4114.allTags = i4122
  return i4114
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i4126 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i4127 = data
  i4126.name = i4127[0]
  i4126.value = i4127[1]
  return i4126
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i4130 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i4131 = data
  i4130.id = i4131[0]
  i4130.name = i4131[1]
  i4130.value = i4131[2]
  return i4130
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i4134 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i4135 = data
  i4134.id = i4135[0]
  i4134.name = i4135[1]
  return i4134
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i4136 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i4137 = data
  i4136.fixedDeltaTime = i4137[0]
  i4136.maximumDeltaTime = i4137[1]
  i4136.timeScale = i4137[2]
  i4136.maximumParticleTimestep = i4137[3]
  return i4136
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i4138 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i4139 = data
  i4138.gravity = new pc.Vec3( i4139[0], i4139[1], i4139[2] )
  i4138.defaultSolverIterations = i4139[3]
  i4138.bounceThreshold = i4139[4]
  i4138.autoSyncTransforms = !!i4139[5]
  i4138.autoSimulation = !!i4139[6]
  var i4141 = i4139[7]
  var i4140 = []
  for(var i = 0; i < i4141.length; i += 1) {
    i4140.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i4141[i + 0]) );
  }
  i4138.collisionMatrix = i4140
  return i4138
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i4144 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i4145 = data
  i4144.enabled = !!i4145[0]
  i4144.layerId = i4145[1]
  i4144.otherLayerId = i4145[2]
  return i4144
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i4146 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i4147 = data
  request.r(i4147[0], i4147[1], 0, i4146, 'material')
  i4146.gravity = new pc.Vec2( i4147[2], i4147[3] )
  i4146.positionIterations = i4147[4]
  i4146.velocityIterations = i4147[5]
  i4146.velocityThreshold = i4147[6]
  i4146.maxLinearCorrection = i4147[7]
  i4146.maxAngularCorrection = i4147[8]
  i4146.maxTranslationSpeed = i4147[9]
  i4146.maxRotationSpeed = i4147[10]
  i4146.baumgarteScale = i4147[11]
  i4146.baumgarteTOIScale = i4147[12]
  i4146.timeToSleep = i4147[13]
  i4146.linearSleepTolerance = i4147[14]
  i4146.angularSleepTolerance = i4147[15]
  i4146.defaultContactOffset = i4147[16]
  i4146.autoSimulation = !!i4147[17]
  i4146.queriesHitTriggers = !!i4147[18]
  i4146.queriesStartInColliders = !!i4147[19]
  i4146.callbacksOnDisable = !!i4147[20]
  i4146.reuseCollisionCallbacks = !!i4147[21]
  i4146.autoSyncTransforms = !!i4147[22]
  var i4149 = i4147[23]
  var i4148 = []
  for(var i = 0; i < i4149.length; i += 1) {
    i4148.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i4149[i + 0]) );
  }
  i4146.collisionMatrix = i4148
  return i4146
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i4152 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i4153 = data
  i4152.enabled = !!i4153[0]
  i4152.layerId = i4153[1]
  i4152.otherLayerId = i4153[2]
  return i4152
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i4154 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i4155 = data
  var i4157 = i4155[0]
  var i4156 = []
  for(var i = 0; i < i4157.length; i += 1) {
    i4156.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i4157[i + 0]) );
  }
  i4154.qualityLevels = i4156
  var i4159 = i4155[1]
  var i4158 = []
  for(var i = 0; i < i4159.length; i += 1) {
    i4158.push( i4159[i + 0] );
  }
  i4154.names = i4158
  i4154.shadows = i4155[2]
  i4154.anisotropicFiltering = i4155[3]
  i4154.antiAliasing = i4155[4]
  i4154.lodBias = i4155[5]
  i4154.shadowCascades = i4155[6]
  i4154.shadowDistance = i4155[7]
  i4154.shadowmaskMode = i4155[8]
  i4154.shadowProjection = i4155[9]
  i4154.shadowResolution = i4155[10]
  i4154.softParticles = !!i4155[11]
  i4154.softVegetation = !!i4155[12]
  i4154.activeColorSpace = i4155[13]
  i4154.desiredColorSpace = i4155[14]
  i4154.masterTextureLimit = i4155[15]
  i4154.maxQueuedFrames = i4155[16]
  i4154.particleRaycastBudget = i4155[17]
  i4154.pixelLightCount = i4155[18]
  i4154.realtimeReflectionProbes = !!i4155[19]
  i4154.shadowCascade2Split = i4155[20]
  i4154.shadowCascade4Split = new pc.Vec3( i4155[21], i4155[22], i4155[23] )
  i4154.streamingMipmapsActive = !!i4155[24]
  i4154.vSyncCount = i4155[25]
  i4154.asyncUploadBufferSize = i4155[26]
  i4154.asyncUploadTimeSlice = i4155[27]
  i4154.billboardsFaceCameraPosition = !!i4155[28]
  i4154.shadowNearPlaneOffset = i4155[29]
  i4154.streamingMipmapsMemoryBudget = i4155[30]
  i4154.maximumLODLevel = i4155[31]
  i4154.streamingMipmapsAddAllCameras = !!i4155[32]
  i4154.streamingMipmapsMaxLevelReduction = i4155[33]
  i4154.streamingMipmapsRenderersPerFrame = i4155[34]
  i4154.resolutionScalingFixedDPIFactor = i4155[35]
  i4154.streamingMipmapsMaxFileIORequests = i4155[36]
  i4154.currentQualityLevel = i4155[37]
  return i4154
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar"] = function (request, data, root) {
  var i4162 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar' )
  var i4163 = data
  i4162.name = i4163[0]
  var i4165 = i4163[1]
  var i4164 = []
  for(var i = 0; i < i4165.length; i += 1) {
    i4164.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair', i4165[i + 0]) );
  }
  i4162.tos = i4164
  var i4167 = i4163[2]
  var i4166 = []
  for(var i = 0; i < i4167.length; i += 1) {
    i4166.push( i4167[i + 0] );
  }
  i4162.constant = i4166
  i4162.isValid = !!i4163[3]
  i4162.isHuman = !!i4163[4]
  i4162.hasRootMotion = !!i4163[5]
  return i4162
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair"] = function (request, data, root) {
  var i4170 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair' )
  var i4171 = data
  i4170.hash = i4171[0]
  i4170.path = i4171[1]
  return i4170
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i4174 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i4175 = data
  i4174.weight = i4175[0]
  i4174.vertices = i4175[1]
  i4174.normals = i4175[2]
  i4174.tangents = i4175[3]
  return i4174
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

Deserializers.creativeName = "library_1024";

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

Deserializers.isRuntimeAnalysisEnabledForCode = "True";

Deserializers.runtimeAnalysisExcludedClassesCount = "1712";

Deserializers.runtimeAnalysisExcludedMethodsCount = "3719";

Deserializers.runtimeAnalysisExcludedModules = "physics2d, reflection";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "StandaloneWindows64";

Deserializers.applicationIdentifier = "com.DefaultCompany.3D-Project";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 24;

Deserializers.linearColorSpace = true;

Deserializers.buildID = "fc37b901-bdd9-4275-b695-fe3d47aed339";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

