import image from './image.jpeg'
const cardStyle = {
  border: '1px solid #ddd',
  borderRadius: '8px',
  padding: '20px',
  boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
  maxWidth: '300px',
  backgroundColor: 'white',
};

function Card(){
 return (
    <>
    <div style={cardStyle}>
    <img src={image} alt="placeholder" />
    <h2>
        Post
    </h2>
    </div>
    </>
 )
}
export default Card;