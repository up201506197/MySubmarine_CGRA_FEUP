/**
 * MyUnitCubeTrapeze
 * @constructor
 */
 function MyUnitCubeTrapeze(scene) {
 	CGFobject.call(this, scene);

 	this.trapeze = new MyTrapeze(this.scene);
 };

 MyUnitCubeTrapeze.prototype = Object.create(CGFobject.prototype);
 MyUnitCubeTrapeze.prototype.constructor = MyUnitCubeTrapeze;

 MyUnitCubeTrapeze.prototype.display = function() {
 	// front face
 	this.scene.pushMatrix();
 	this.scene.translate(0, 0, 0.5);
 	this.trapeze.display();
 	this.scene.popMatrix();

 	// back face
 	this.scene.pushMatrix();
 	this.scene.rotate(180 * degToRad, 1, 0, 0);
 	this.scene.translate(0, 0, 0.5);
 	this.trapeze.display();
 	this.scene.popMatrix();

 	// top face
 	this.scene.pushMatrix();
 	this.scene.rotate(-90 * degToRad, 1, 0, 0);
 	this.scene.translate(0, 0, 0.5);
 	this.trapeze.display();
 	this.scene.popMatrix();

 	// back face
 	this.scene.pushMatrix();
 	this.scene.rotate(90 * degToRad, 1, 0, 0);
 	this.scene.translate(0, 0, 0.5);
 	this.trapeze.display();
 	this.scene.popMatrix();

 	// right face
 	this.scene.pushMatrix();
 	this.scene.rotate(-90 * degToRad, 0, 1, 0);
 	this.scene.translate(0, 0, 0.5);
 	this.trapeze.display();
 	this.scene.popMatrix();

 	// left face
 	this.scene.pushMatrix();
 	this.scene.rotate(90 * degToRad, 0, 1, 0);
 	this.scene.translate(0, 0, 0.5);
 	this.trapeze.display();
 	this.scene.popMatrix();
 };