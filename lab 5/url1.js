const url = new URL("https://www.demo.com")

url.pathname = 'path/path1/path2'

url.searchParams.append("name","Heet")
url.searchParams.append("age",20)
url.searchParams.append("city","Junagadh")

console.log(url.toString());