const blogURL = "localhost:3000/blog";
const form = document.getElementById("form1");

const handleFormSubmission = (e) => {
	e.preventDefault();

	const formData = new FormData(form);

	const author = formData.get("author");
	const blog = formData.get("blog-text");

	const data = {};
	data["author"] = author;
	data["blog"] = blog;

	fetch("/blog", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(data),
	});

	console.log(e.target);
	console.log(data);
};

form.addEventListener("submit", async function (e) {
	handleFormSubmission(e);
	e.preventDefault();
});
