# Simple-Alert
This project is a remake of [SweetAlert (1)](https://sweetalert.js.org/) to make basic beautiful alert boxes.

## Welcome to Simple-Alert
Amazing / basic `alert`, `confirm`, and `prompt` boxes.

The library loads [SweetAlert (1)](https://sweetalert.js.org/) and makes its on custom styles for the alert box.

###### Alert box
<img alt="Alert" src="https://user-images.githubusercontent.com/88283567/139311757-86692f3d-400f-45d9-b39b-2820d0c61c17.png" width="500" />

###### Confirm box
<img alt="Confirm" src="https://user-images.githubusercontent.com/88283567/139311979-bb635b33-e764-4b5a-a61f-6ec23000e209.png" width="500" />

###### Prompt box
<img alt="Prompt" src="https://user-images.githubusercontent.com/88283567/139312141-88d6f5f8-8fff-47aa-abea-16825dbe7123.png" width="500" />

<hr />

### Getting started
1-Line code embed with CDNjs.
```
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/Parking-Master/Simple-Alert@latest/simplealert.js"></script>
```
For the minified version:
```
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/Parking-Master/Simple-Alert@latest/simplealert.min.js"></script>
```
Read the [documentation](#documentation) below to make your amazing alert boxes!
### Documentation
You can also try a [live preview](https://parking-master.github.io/Simple-Alert/preview.htm) before you start.
#### Alert box
```
simple.alert("Your message", function() {
/* Function after "OK" is pressed */
});
```
#### Confirm box
```
simple.confirm("Do you really want to do this?", function() {
/*
* Function after "OK" is pressed.
* If "Cancel" is pressed, the box will close
*/
});
```
#### Prompt box
```
simple.prompt("Enter something:", "", (val) => {
/* "val" is the value from the input. */
});
```
Try it out!

<hr />

###### Copyright (c) 2021 Parking Master

## License
MIT
