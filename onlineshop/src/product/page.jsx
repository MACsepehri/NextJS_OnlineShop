import { Link } from "react-router-dom"
import { data } from "../../public/assets/data/data"

export default function AllProducts() {
    let all = [...data.computer,...data.gaming,...data.headphone,...data.mobile,...data.watch]
    { 
        all.map((value,index)=>{
            return (
                <div className="product-box" key={index}>
                    <div><br />
                        <img className="product-image"
                            src={value.image}
                            alt={value.name}
                        />
                    </div>

                    <h3>{value.name}</h3>
                    <pre>{value.desc}</pre>
                    <div className="pb-flex-bottom">
                        <p>{value.price}$</p><p>id: {value.id}<br/></p>
                    </div>
                    <Link style={{color:'#0088ff'}} to={"/product/"+value.id}>View</Link><br />
                </div>
            )
        })
    }
}