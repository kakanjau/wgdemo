import * as THREE from 'three';
import { Curve } from 'three';
import { NURBSUtils } from './nurbsUtils';

export class NURBSCurve extends Curve {
  constructor(degree, knots, controlPoints, startKnot, endKnot) {
    super();
    this.degree = degree;
    this.knots = knots;
    this.controlPoints = [];
    this.startKnot = startKnot || 0;
    this.endKnot = endKnot || (this.knots.length - 1);
    controlPoints.forEach((point, idx) => {
      this.controlPoints.push(new THREE.Vector4(point.x, point.y, point.z, point.w));
    });
  }
  getPoint(t) {
    const u = this.knots[this.startKnot] + t * (this.knots[this.endKnot] - this.knots[this.startKnot]);
    const hpoint = NURBSUtils.calcBSplinePoint( this.degree, this.knots, this.controlPoints, u);
    if (hpoint.w != 1.0) {
      hpoint.divideScalar(hpoint.w);
    }

    return new THREE.Vector3(hpoint.x, hpoint.y, hpoint.z);
  }
  getTrangent(t) {
    const u = this.knots[this.startKnot] + t * (this.knots[this.endKnot] - this.knots[this.startKnot]);
    const ders = NURBSUtils.calcNURBSDerivatives(this.degree, this.knots, this.controlPoints, u, 1);
    const tangent = ders[1].clone();
    tangent.normalize();

    return tangent;
  }
};