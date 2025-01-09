# Repository dedicated to sharing assigned projects from WDX-180 bootcamp with the instructors.


    1. Search Widget

    We have an  input field that searches through a hardcoded list. Once the user types
    more that three (3) characters AND there is a match from the list, the results are
    presented just below the input field. All of the HTML and styles are custom.
    
    The hardcodded list is a book series:

        - Pierce Brown - Red Rising
        - Pierce Brown - Golden Son
        - Pierce Brown - Morning Star
        - Pierce Brown - Iron Gold
        - Pierce Brown - Dark Age
        - Pierce Brown - Red God

    2. Search Data Explorer

    As the name suggests, this is a search data explorer. We have an input that the 
    user can type anything into. Below there are three (3) different Cinema Chains that
    list four (4) movies. In the title of each movie, there is information about the
    genre of the film. All of these are hardcoded.

    Taking all available genres (hardcoded), a datalist is generated automatically. When there is no user input and the user clicks on the input field, they can scroll
    through the available options and once a choice is clicked, it fills the input 
    field.

    Once the input field is filled, either by a click as mentioned above or by the user
    typing, the widget searches through every available movie to find matches in each
    cinema. If there are matches, the movie is highlighted and the number of matches by cinema is presented in a yellow-orange bubble next to the cinema name.

    If there is no initial input or the user deletes the previous input until there is
    nothing. Everything resets, meaning there are no counted movies nor any highlights.