class BinaryUrlReader
{
	read(url, callback)
	{
		fetch(url).then(r => {
			let reader = new FileReader()
			reader.addEventListener('load', function () {
				callback(reader)
			}, false)
			reader.readAsDataURL(r.blob())
		})
		
	}
}

module.exports = new BinaryUrlReader
