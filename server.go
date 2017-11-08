package main

import (
	"fmt"
	"net/http"
)

func rootHandler(w http.ResponseWriter, r *http.Request) {
	http.ServeFile(w, r, "index.html")
}

func compHandler(w http.ResponseWriter, r *http.Request) {
	path := r.URL.Path
	fmt.Println("path:", path[1:])
	http.ServeFile(w, r, path[1:])
}

func servePages() {
	fmt.Println("Starting server on port 8080...")
	http.HandleFunc("/", rootHandler)
	http.HandleFunc("/src/", compHandler)
	http.HandleFunc("/bower_components/", compHandler)
	http.ListenAndServe(":8080", nil)
}

func main() {
	servePages()
}
