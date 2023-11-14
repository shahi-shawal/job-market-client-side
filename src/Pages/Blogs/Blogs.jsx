import { Helmet } from "react-helmet-async";
import Navbar from "../../Components/Shared/Navbar";
import Footer from "../../Components/Shared/Footer/Footer";
import img1 from "../../assets/Images/animatepng.png";
import img2 from "../../assets/Images/img1_files/team-2.jpg";
import express from "../../assets/Images/express.png"
import jwt from "../../assets/Images/jwt.png"
import code from "../../assets/Images/code.jfif"
const Blogs = () => {
  return (
    <div>
      <Helmet title="JOBS MARKET | BLOGS"></Helmet>
      <Navbar></Navbar>
      <div
        style={{
          backgroundImage: `url(${img1})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "30vh",
        }}
        className="mt-5 py-2"
      >
        <div className="py-2 px-2 lg:py-20 lg:px-20 lg:text-3xl font-bold text-white">
          Blogs
        </div>
      </div>
      <div className=" p-5">
        <div className="flex flex-col justify-center items-center lg:flex-row border p-4 w-auto rounded-lg gap-6 bg-slate-300">
          <div className=" ">
            <img className="rounded-lg" src={jwt} alt="" />
          </div>
          <div className="flex-1">
            <h1 className="card-title mb-2">
              What is an access token and refresh token? How do they work and
              where should we store them on the client-side?
            </h1>
            <div className="flex items-center gap-2 mb-3">
            <div className="avatar">
              <div className="w-16 rounded-full">
                <img src={img2} />
              </div>
            </div>
            <div>
            <p className="font-bold">Jon Dee</p>
            <p className="font-semi-bold">2 days ago</p>
            </div>
            </div>
            <p>
              Access tokens and refresh tokens are components of the OAuth 2.0
              authentication and authorization protocol, commonly used to secure
              web APIs. Here's an overview of each: Access Token: Purpose: An
              access token is a credential that represents the authorization
              granted to a client. It is used to access protected resources on
              behalf of a user. Lifespan: Access tokens have a relatively short
              lifespan, typically lasting minutes to hours. Usage: The client
              includes the access token in API requests to authenticate itself
              and gain access to the user's data. Refresh Token: Purpose: A
              refresh token is a credential used to obtain a new access token
              when the current one expires. It allows clients to maintain
              long-term access to resources without requiring the user to
              re-authenticate. Lifespan: Refresh tokens have a longer lifespan
              compared to access tokens and are used to request new access
              tokens. Usage: When the access token expires, the client uses the
              refresh token to request a new access token without requiring user
              credentials. How They Work: Initial Authentication: The client
              obtains an access token and refresh token through the OAuth 2.0
              authorization process. The user is typically involved in the
              initial authentication. Access Token Usage: The client includes
              the access token in API requests to access protected resources.
              The resource server validates the token before processing the
              request. Token Expiration: Access tokens have a limited lifespan
              to enhance security. When an access token expires, the client uses
              the refresh token to request a new access token without involving
              the user. Token Refresh Process: The client sends a refresh token
              to the authorization server to obtain a new access token. The
              authorization server validates the refresh token and issues a new
              access token. Where to Store on the Client-Side: Access Token:
              Store the access token securely but accessibly. Common methods
              include: HTTP Cookies: Secure, but vulnerable to cross-site
              scripting (XSS) attacks. Local Storage: Easy to access but
              vulnerable to XSS attacks. Session Storage: Similar to local
              storage, but data is cleared when the session ends. In-Memory:
              Stored in a variable, but susceptible to page refresh or closure.
              Refresh Token: Store the refresh token securely due to its long
              lifespan: HTTP-Only Cookies: Prevents client-side scripts from
              accessing the token. Secure and HttpOnly Flags: Add these flags to
              cookies for additional security. Token Storage with Same-Origin
              Policy: Utilize secure storage mechanisms that adhere to the
              same-origin policy. The choice of storage depends on the specific
              requirements and security considerations of your application.
              Always prioritize security, and consider factors such as token
              expiration, token renewal, and potential vulnerabilities when
              deciding where to store tokens on the client-side
            </p>
            
          </div>
        </div>


        <div className="flex flex-col justify-center items-center lg:flex-row border p-4 w-auto rounded-lg gap-6 bg-slate-300">
          <div className=" ">
            <img className="rounded-lg" src={express} alt="" />
          </div>
          <div className="flex-1">
            <h1 className="card-title mb-2">
            What is express js? What is Nest JS?
            </h1>
            <div className="flex items-center gap-2 mb-3">
            <div className="avatar">
              <div className="w-16 rounded-full">
                <img src={img2} />
              </div>
            </div>
            <div>
            <p className="font-bold">Jon Dee</p>
            <p className="font-semi-bold">2 days ago</p>
            </div>
            </div>
            <p>
            <span className="text-red-400">Express.js</span>, commonly known as Express, is a web application framework for Node.js. It is designed to simplify the process of building robust, scalable, and maintainable web applications and APIs. Express.js provides a minimalistic and flexible set of features for web and mobile application development, making it one of the most popular choices for building server-side applications with Node.js.

   <br></br>         
<span className="text-red-400">NestJS</span> is a server-side framework for building scalable and maintainable web applications using TypeScript or JavaScript (ECMAScript) and is designed with a focus on modularity and extensibility. It is built on top of Node.js and uses concepts from both object-oriented and functional programming. NestJS is often associated with the term "Angular for the server," as it shares similarities with Angular, a popular front-end framework.
            </p>
          </div>
        </div>


        <div className="flex flex-col justify-center items-center lg:flex-row border p-4 w-auto rounded-lg gap-6 bg-slate-300">
          <div className=" ">
            <img className="rounded-lg" src={code} alt="" />
          </div>
          <div className="flex-1">
            <h1 className="card-title mb-2">
           Explain My Code
            </h1>
            <div className="flex items-center gap-2 mb-3">
            <div className="avatar">
              <div className="w-16 rounded-full">
                <img src={img2} />
              </div>
            </div>
            <div>
            <p className="font-bold">Jon Dee</p>
            <p className="font-semi-bold">2 days ago</p>
            </div>
            </div>
            <p> Jobs Market code build in Js. We are use react, daisyUi, tailwind for forntend and backend use firebase, mongoDb, expressJs, nodeJs. Firstly, We Create some components for easy tp build in. Then we implement our logic and Code.Every section we use different components 
            </p>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Blogs;
