package main

import (
	"log"
	"net/http"
	"net/url"
)

func redirectHandler(w http.ResponseWriter, r *http.Request) {
	log.Printf("host: %v", r.Host)

	u, err := url.Parse("https://" + r.Host)
	if err != nil {
		log.Fatalf("Error parsing URL: %v", err)
	}

	http.Redirect(w, r, "https://"+u.Hostname()+":8443/", http.StatusMovedPermanently)
}

func main() {
	if err := http.ListenAndServe(":8080", http.HandlerFunc(redirectHandler)); err != nil {
		log.Fatalf("%v", err)
	}
}
