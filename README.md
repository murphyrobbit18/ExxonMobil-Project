## Lab 2 Pseudocode

    get user to select which design they want to test

    if user selects design #1
        reads the light sensor
        the button being pressed or not is recorded 

        if the light sensor is below 370 or the button is pressed
            the LED turns on

        overwise
            the LED does not turn on

    if user selects design #2
        reads the sound sensor

        if the sensor reads over 430

            shows the reading of the sensor
            prompts the user for the password
        
            if the user gets the right password
                user gets access to the system
            
            otherwise
                the buzzer will make a low frequency sound

        overwise
            shows the reading of the sensor

    otherwise
        tell them that what they chose is not an option
