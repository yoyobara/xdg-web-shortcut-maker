function App(): JSX.Element {
	const onclick = () => {
		console.log("BRUH");
	}

	return (
		<div>
			<h1>what</h1>
			<button onClick={onclick}>Click Me</button>
		</div>
	)
}

export default App
