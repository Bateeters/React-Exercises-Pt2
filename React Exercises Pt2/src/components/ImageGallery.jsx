import { useState, useEffect } from "react";
import { searchImages } from "../services/api";

function ImageGallery() {

    const [imageQuery, setImageQuery] = useState("");
    const [images, setImages] = useState([])
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    const [selectedImg, setSelectedImg] = useState(null);


    const handleSearch = async () => {
        if (!imageQuery.trim()) return;

        try {
            const results = await searchImages(imageQuery);
            setImages(results)
        } catch (err) {
            console.log(err);
            setError("Search failed...");
        } finally {
            setLoading(false);
        }
    }

    const handleClick = (url) => {
        setSelectedImg(url);
    }

    const closeFullscreen = () => {
        setSelectedImg(null);
    }

    return(
        <div>
            <h3>12. Image Gallery</h3>
            <h5>Goal: Build a clickable image gallery.</h5>
            <p>Steps:</p>
            <ol>
                <li>Create a component called ImageGallery.</li>
                <li>Use a static array of image URLs.</li>
                <li>Render them in a grid.</li>
                <li>Track selected image with a state.</li>
                <li>On click, show full image view.</li>
                <li><strong>Optional:</strong> Add a search bar and button to search for specific images.</li>
            </ol>
            <br />
            <p>Exercise Solution:</p>
            <input
                type="text"
                value={imageQuery}
                placeholder="Search for images..."
                onChange={(e) => setImageQuery(e.target.value)}
            />
            <button
                onClick={() => handleSearch()}
            >Search</button>
            <div style={{display: "flex", flexWrap: "wrap"}}>
                {images.map((image) => (
                    <img 
                        style={{width: "30%"}}
                        src={image.images.fixed_height.url} 
                        alt={image.title} 
                        key={image.id}
                        onClick={() => handleClick(image.images.original.url)}
                    />
                ))}
            </div>
            
            <br /><br />

        </div>
    )
}

export default ImageGallery