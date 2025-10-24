# https://gluer.org/blog/adding-a-search-bar-for-hugo-with-pagefind/
public:
	hugo
	pagefind --site public

run: public
	hugo server

clean:
	rm -rf public
	rm -rf site.tar.gz

.PHONY: clean run publish