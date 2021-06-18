Tasks
Re-resolve a promise?
What’s the output of the code below?

let promise = new Promise(function(resolve, reject) {
  resolve(1);

  setTimeout(() => resolve(2), 1000);
});

promise.then(alert);

// further calls are ignored, you cannot resolve a promise more than once.
// only the first reject/resolve call is taken into account

Delay with a promise
The built-in function setTimeout uses callbacks. 
Create a promise-based alternative.

The function delay(ms) should return a promise. 
That promise should resolve after ms milliseconds, 
so that we can add .then to it, like this:

function delay(ms) {
  // your code
}

delay(3000).then(() => alert('runs after 3 seconds'));

## Attempt at Solution

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

delay(3000).then(() => alert('runs after 3 seconds'));

// Please note that in this task 'resolve' is called without
// arguments. We don't return any value from delay, just enure the delay.

// create a promise that 'resolves' itself in a timeout in ms

<!DOCTYPE html>
<html>

<head>
	<meta charset="utf-8">
	<style>
		.message-ball {
			font-size: 20px;
			line-height: 200px;
			text-align: center;
		}
		.circle {
			transition-property: width, height, margin-left, margin-top;
			transition-duration: 2s;
			position: fixed;
			transform: translateX(-50%) translateY(-50%);
			background-color: red;
			border-radius: 50%;
		}
	</style>	
</head>

<body>

	<button onclick='go()'>Click me</button>

	<script>

	function go() {
		showCircle(150, 150, 100).then(div => {
			div.classList.add('message-ball');
			div.append('Hello, world!');
		});
	}

	function showCircle(cx, cy, radius) {
		let div = document.createElement('div');
		div.style.width = 0;
		div.style.height = 0;
		div.style.left = cx + 'px';
		div.style.top = cy + 'px';
		div.className = 'circle';
		document.body.append(div);

		return new Promise(resolve => {
			setTimeout(() => {
				div.style.width = radius * 2 + 'px';
				div.style.height = radius * 2 + 'px';

				div.addEventListener('transitioned', function handler() {
					div.remoteEventListener('transitioned', handler);
					resolve(div);
				});
			}, 0);
		})
	}

	</script>

</body>
</html>

