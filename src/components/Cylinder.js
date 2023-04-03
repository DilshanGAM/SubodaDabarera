import React,{useState,useRef} from "react";
import {useFrame} from "@react-three/fiber"

function valueRotator(value,maxValue,gap){
    if(value>=maxValue)
        return (-1*(maxValue))
    return (value+gap)
}
export default function Cylinder(props){
    const  ref = useRef()
    const [hovered,hover] = useState(true)
    const [clicked,click] = useState(false)
    const [[rotation,cameraRotation],rotate] = useState([0,[10,10,10]])
    const lightMove = props.cameraXFunction
    
    setInterval(()=>{
        //ref.current.rotation.x += 0.001
        lightMove(cameraRotation)
        console.log(cameraRotation)
        let camera = [valueRotator(cameraRotation[0],20,0.05),valueRotator(cameraRotation[0],20,0.01),10]
        rotate([ref.current.rotation.x,camera])        
    },500);
    // useFrame((state,delta)=>{
    //     ref.current.rotation.x += 0.01;
    // });
    
    return(
        <mesh
            {...props}
            ref = {ref}
            scale = {clicked ? 1.5:1}
            onClick = {(event)=>{
                click(!clicked)
            }}
            onPointerOver = {
                (event)=>{
                    hover(true)
                    
                }
            }
            onPointerOut = {
                (event)=>{hover(false)}
            }
            onPointerMove = {
                (event)=>{
                    // console.log(event.movementX)
                    //lightMove([event.movementX*20,10,10])
                }
            }
        >
            <cylinderGeometry args={[1,1,1]}/>
            <meshStandardMaterial
            wireframe={props.wireframe}
            color={hovered ? "hotpink" : "orange"}
        />
        </mesh>
    )
}