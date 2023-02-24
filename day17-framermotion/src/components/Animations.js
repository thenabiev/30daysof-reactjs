export const ImageTransition={
    duration:1,

}

// Main page animations
export const mainText={
    show:{
        opacity:[0,1],
        scale:[0.75, 1]
    },
    hide:{
        opacity:[1, 0],
        transition:{
            duration: 0.125
        }
    }
}

// More page animations
export const textAnimation={
    show: {
        opacity:[0,1],
        x:[500, 0],
        transition:{
            duration:1,
            when:'beforechildren'
        }
    },
    hide:{
        x:[0, 700],
        transition:{
            duration:1.5,
            when:"afterchildren"
        }
    }
};

export const textndp={
    show:{
        opacity:[0,1],
        y:[-50, 0],
        transition:{
            duration:1
        }
    },
    hide:{
        opacity:[1, 0],
        y: [0, -50],
        transition:{
            duration:1.25
        }
    }
};

export const textbutton={
    show:{
        opacity:[0,1],
        y:[70, 0],
        x:[20, 0],
        scale:[0.5, 1],
        transition:{
            duration:1
        }
    },
    hide:{
        opacity:[1, 0],
        y: [0, 70],
        x:[0, 20],
        scale:[1, 0.5],
        transition:{
            duration:1.25
        }
    }
};

