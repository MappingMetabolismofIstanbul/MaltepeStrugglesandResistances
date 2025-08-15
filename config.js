var config = {
    // style: 'mapbox://styles/mapbox/streets-v12',
    // leave commented to use Mapbox Standard Style
    style: 'mapbox://styles/dogatmn/cm4v9fem6000p01sf12f769y5/draft',
    accessToken: 'pk.eyJ1IjoiZG9nYXRtbiIsImEiOiJjbHlyMTJmcXgwMjQ3MmtzbTRsdm1pejdsIn0.vcEjL7lt8OoOPMP5o1PM6g',
    showMarkers: false,
    markerColor: '#ff70ab',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    insetOptions: {
        markerColor: '#ff70ab'
    },
    insetPosition: 'bottom-right',
    theme: 'light',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'Mücadeleler ve direnişler / Struggles and Resistances',
    subtitle: '',
    byline: 'BAP_Mapping Metabolism of Istanbul_Interactive Mapping / MEF AAP_027',
    footer:  'BAP_Mapping Metabolism of Istanbul_Interactive Mapping / MEF AAP_027',
    chapters: [
        {
            id: '0',
            alignment: 'right',
            hidden: false,
            title: '',
             image: '',
            description: '',
            location: {
                center: [29.12358460330592,40.92628271987823],
                zoom: 12,
                pitch: 10,
                bearing: 0,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 0, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '1',
            alignment: 'left',
            hidden: false,
            title: '',
            image: 'https://i.ibb.co/N6BHpvQF/1.png',
            description: '',
            location: {
               center: [29.12358460330592,40.92628271987823],
                zoom: 12,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
          {
            id: '2',
            alignment: 'centered',
            hidden: false,
            title: '',
             image: 'https://i.ibb.co/B21jwJ6L/2.png',
            description: '',
            location: {
              center: [29.12358460330592,40.92628271987823],
                zoom: 15,
                pitch: 40,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
          {
            id: '3',
            alignment: 'right',
            hidden: false,
            title: '',
             image: 'https://i.ibb.co/nN6hKNtV/3.png',
            description: '',
            location: {
              center: [29.11192680679872,40.93587513162109],
                zoom: 15,
                pitch: 40,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: '4',
            alignment: 'centered',
            hidden: false,
            title: '',
             image: 'https://i.ibb.co/Cs3HYNbC/44.png',
            description: '',
            location: {
                 center: [29.11192680679872,40.93587513162109],
                zoom: 16,
                pitch: 40,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: '5',
            alignment: 'left',
            hidden: false,
            title: '',
            image: 'https://i.ibb.co/hFhD9JwJ/5.png',
            description: '',
            location: {
                 center: [29.11879957844688,40.92565528590029],
                zoom: 16,
                pitch: 40,
                bearing: 0,
        
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 0, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '6',
            alignment: 'right',
            hidden: false,
            title: '',
           image: 'https://i.ibb.co/5WB3Z8D4/6.png',
            description: '',
            location: {
                center: [29.13189993199594,40.931334055466664],
                zoom: 13.5,
                pitch: 0,
                bearing: 0,
              
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 0, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        
    ]
};
