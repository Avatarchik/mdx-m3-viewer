function Node(object, model, pivots) {
    this.name = object.name;
    this.objectId = object.objectId;
    this.parentId = object.parentId;
    this.pivot = pivots[object.objectId] || [0, 0, 0];
    this.billboarded = object.billboarded;
    this.modelSpace = object.modelSpace;
    this.xYQuad = object.xYQuad;
    
    if (object.tracks) {
        this.sd = parseSDTracks(object.tracks, model);
    }
    
    if (object.objectId === object.parentId) {
        this.parentId = -1;
    }
}

// Used by each copy of a skeleton to hold the node hierarchy
// Keeps a reference to the actual node containing the animation data, that the model owns
function ShallowNode(node) {
    BaseNode.call(this);

    this.nodeImpl = node;
    this.objectId = node.objectId;
    this.parentId = node.parentId;
    
    vec3.copy(this.pivot, node.pivot);
    
    this.externalWorldMatrix = mat4.create();
}

ShallowNode.prototype = extend(BaseNode.prototype, {
    getTransformation: function () {
        var m = this.externalWorldMatrix;

        mat4.copy(m, this.worldMatrix);
        mat4.translate(m, m, this.pivot);

        return m;
    }
});