  textureHandlers[".png"] = NativeTexture;
  textureHandlers[".gif"] = NativeTexture;
  textureHandlers[".jpg"] = NativeTexture;
  
  return {
    setPerspective: setPerspective,
    setOrtho: setOrtho,
    loadIdentity: loadIdentity,
    translate: translate,
    rotate: rotate,
    scale: scale,
    lookAt: lookAt,
    multMat: multMat,
    pushMatrix: pushMatrix,
    popMatrix: popMatrix,
    createShader: createShader,
    shaderStatus: shaderStatus,
    bindShader: bindShader,
    getViewProjectionMatrix: getViewProjectionMatrix,
    getProjectionMatrix: getProjectionMatrix,
    getViewMatrix: getViewMatrix,
    setProjectionMatrix: setProjectionMatrix,
    setViewMatrix: setViewMatrix,
    loadTexture: loadTexture,
    unloadTexture: unloadTexture,
    textureLoaded: textureLoaded,
    textureOptions: textureOptions,
    bindTexture: bindTexture,
    createRect: createRect,
    createSphere: createSphere,
    createCube: createCube,
    createCylinder: createCylinder,
    ctx: ctx,
    registerTextureHandler: registerTextureHandler
  };
}