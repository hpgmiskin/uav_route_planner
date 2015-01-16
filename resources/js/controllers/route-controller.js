sampleApp.controller('ShowRouteController', function($scope) {

    var width  = window.innerWidth,
        height = window.innerHeight,
        planeSize = 2;

    var scene = new THREE.Scene();
    scene.add(new THREE.AmbientLight(0xeeeeee));

    var camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000);
    camera.position.set(0, -planeSize , planeSize );

    var renderer = new THREE.WebGLRenderer();
    renderer.setSize(width, height);    

    var controls = new THREE.TrackballControls(camera); 

    document.getElementById('plot').appendChild(renderer.domElement);


    render();

    function render() {
        controls.update();    
        requestAnimationFrame(render);
        renderer.render(scene, camera);
    }

    function addPlane(){
        var geometry = new THREE.PlaneGeometry(planeSize, planeSize, 511, 511);

        var material = new THREE.MeshBasicMaterial({
            color: 0xE0EEE0
        });

        var plane = new THREE.Mesh(geometry, material);
        scene.add(plane);
    }

    function addLine(vector,color){

        x = vector[0];
        y = vector[1];
        z = vector[2];

        geometry = new THREE.Geometry();

        length = x.length 

        for (i=0; i<length; i++){
            geometry.vertices.push(new THREE.Vector3(x[i]-0.5,y[i]-0.5,z[i])); 
        }

        var material = new THREE.LineBasicMaterial({
            color: color,
            linewidth: 10
        });

        var line = new THREE.Line(geometry, material);
        scene.add(line);

    }

    addPlane();
    addLine(route,0xaaaaaa);
    addLine([[0.5,0.5,0.5],[0.5,0.5,0.5],[0,0,1]],0xaaaaff);


});