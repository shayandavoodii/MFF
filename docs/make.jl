using Documenter
using MFF

DocMeta.setdocmeta!(MFF, :DocTestSetup, :(using MFF))

makedocs(
    authors="Shayan Davoodi <sh0davoodi@gmail.com>",
    repo="https://github.com/ShayanDavoodii/MFF",
    format = Documenter.HTML(
        canonical = "https://shayandavoodii.github.io/MFF/",
        edit_link = "https://github.com/shayandavoodii/MFF/gh-pages/docs/src/",
        prettyurls = get(ENV, "CI", nothing) == "true"
    ),
    pages = [
        "Home" => "index.md",
        ],
    sitename = "MFF",
)

deploydocs(
    repo="github.com/ShayanDavoodii/MFF.git",
    devbranch = "master"
)
