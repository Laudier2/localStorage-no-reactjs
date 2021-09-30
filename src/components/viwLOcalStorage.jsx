import React, {useState, useEffect} from 'react'
import './local.css'


export default function ViwLOcalStorage() {

    const [ local1, setLocal1 ] = useState('')
    const [ local2, setLocal2 ] = useState('')
    const [ local3, setLocal3 ] = useState('')

    useEffect(() => {
        const LocalName = async () => {
            const req = await localStorage.getItem('name')
            const res = await JSON.parse(req)
            setLocal1(res)
        }

        LocalName()

        const LocalImage = async () => {
            const req = await localStorage.getItem('image')
            const res = await JSON.parse(req)
            setLocal2(res)
        }

        LocalImage()

        const LocalPrice = async () => {
            const req = await localStorage.getItem('preco')
            const res = await JSON.parse(req)
            setLocal3(res)
        }

        LocalPrice()
        
    },[])
    
    return (
        <div>
            <img src={local2} alt="" className="img1" />
           <p className="m-left">
                {local1}
           </p> 
           <p className="m-left">
                R$ {local3}
           </p> 
        </div>
    )
}
