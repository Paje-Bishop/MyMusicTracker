
export const Main = () =>  {
    const CLIENT_ID = "98acb0a78b7f4a99beeeddabf77a7673"
    const REDIRECT_URI = "http://localhost:3000/redirect"
    const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
    const  RESPONSE_TYPE = "token"        
        




  return (
    <div className="main">
      <div>



        <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirecturi=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>login spotify</a>
      </div>
    </div>
  );
}


