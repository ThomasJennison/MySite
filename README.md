# MySite
This is a repo for a personal website I’ve been working on.
Currently it has a photo upload function, and some embedded controls from Bandcamp.
Its in an early stage and there’s more to do still

<h1>Pages</h1>
<table border="1" style="width:300px;">
  <tr>
    <h2>Home</h1>
    </td>
  </tr>
  <tr>
    <td>
      <p>Splash screen with a photo gallery (and a weird self portrait I made lol)</p>
      <p>React image gallery control from: https://www.npmjs.com/package/react-grid-gallery</p>
      <p>Controller for getting photos: https://github.com/ThomasJennison/MySite/blob/master/MySite/Controllers/PhotoViewerController.cs</p>
      <p>Frontend file: https://github.com/ThomasJennison/MySite/blob/master/MySite/ClientApp/src/components/Home.js </p>
    </td>
  </tr>
  <tr>
    <td align="center">
        <img src="https://user-images.githubusercontent.com/7981120/135156346-56c90993-62ed-4acb-bd1d-b871931404f4.gif" alt="Home page gif" style="width:800;height:800px;"> 
        <span>
    </td>
  <tr>
</table>
    
<table border="1" style="width:300px;">
  <tr>
    <td align="center">
    <h2>Photo Upload</h1>
    </td>
  </tr>
  <tr>
    <td>
      <p>Lets a user with a login add photos to the main screen. more work to be done here still… need to lock it out so only admin users can do that, and link up the on-screen input’s for photo data</p>
      
      <p>Uploader controller: https://github.com/ThomasJennison/MySite/blob/master/MySite/Controllers/UploaderController.cs</p>
      <p>Frontend file: https://github.com/ThomasJennison/MySite/blob/master/MySite/ClientApp/src/components/PhotosAdmin.js</p>
    </td>
  </tr>
  <tr>
    <td align="center">
        <img src="https://user-images.githubusercontent.com/7981120/135161299-97fa15e9-307e-4788-b39b-055ba5fcdecc.gif" alt="Photo upload gif" style="width:800;height:800px;"> 
        <span>
    </td>
  <tr>
</table>
    
<table border="1" style="width:300px;">
  <tr>
    <td align="center">
    <h2>Music</h1>
    </td>
  </tr>
  <tr>
    <td>
      <p>A page with some details about recordings, used React Bandcamp control (Bandcamp Player from https://www.npmjs.com/package/react-bandcamp) <br/>
         frontend file: https://github.com/ThomasJennison/MySite/blob/master/MySite/ClientApp/src/components/Music.js</p>
    </td>
  </tr>
  <tr>
    <td align="center">
        <img src="https://user-images.githubusercontent.com/7981120/135157500-a913febb-16e4-476a-8f0a-35aa219cf33c.gif" alt="Music Page Gif" style="width:800;height:800px;"> 
        <span>
    </td>
  <tr>
</table>

--------------------------------------------------------------------------------------------------------
    
Whats left to finish:
- Add projects into the projects page, I will probabbly just hardcode html or make a blog function.
- Add email authentication interface 
- Tidy up music page
- Tests
- Try embedding unity / web gl


