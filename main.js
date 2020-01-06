class BinaryUrlReader
{
	read(url, callback)
	{
		let blob = await fetch(url).then(r => r.blob())
		let reader = new FileReader()
		reader.addEventListener('load', function () {
			callback(reader)
		}, false);
		reader.readAsDataURL(blob)
	}
}

module.exports = new BinaryUrlReader
