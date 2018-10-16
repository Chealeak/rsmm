# Responsive Side Mobile Menu jQuery Plugin

## Quick Start

### HTML
Prepare HTML structure as below (with or without submenu).
```
<nav class="your-class">
	<ul>
		<li>
			<a href="#">Item 1</a>
		</li>
		<li>
			<a href="#">Item 2</a>
			<ul>
				<li>
					<a href="#">Subitem 1</a>
				</li>
				<li>
					<a href="#">Subitem 2</a>
				</li>
				<li>
					<a href="#">Subitem 3</a>
				</li>
			</ul>
		</li>
		<li>
			<a href="#">Item 3</a>
		</li>
	</ul>
</nav>
```
### CSS
Include style.css into a page head.

```
<link rel="stylesheet" href="style.css">
```

### Javascript
Include jQuery before </body> first. Then include script.js after it.

```
<script src="https://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="crossorigin="anonymous"></script>

<script src="script.js"></script>
```

### Initialization
Initialize the plugin as below.

```
$(document).ready(function() {
	$('.your-class').rsmm({
		'position' : 'fixedOnScroll', // Should your menu be fixed? Don't include this option if it is not.
		'mobile' : 768 // Switch to mobile view breakpoint
	});
});
```
