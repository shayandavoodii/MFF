var documenterSearchIndex = {"docs":
[{"location":"functions/#API","page":"Functions","title":"API","text":"","category":"section"},{"location":"functions/","page":"Functions","title":"Functions","text":"Modules = [MFF]\nPrivate = false","category":"page"},{"location":"functions/#MFF.get_data-Tuple{Val{:df}, String, String, String}","page":"Functions","title":"MFF.get_data","text":"get_data(::Val{:df}, stock::String, startdt::String, enddt::String; prprty::String=\"adjclose\", rng::Nothing=nothing, fixdt::Bool=true)::DataFrame\n\nFetch data from Yahoo Finance and return a DataFrame.\n\nArguments\n\n::Val{:df}: Return a DataFrame.\nstock::String: The stock ticker.\nstartdt::String: The start date. The format is \"YYYY-MM-DD\".\nenddt::String: The end date. The format is \"YYYY-MM-DD\".\nprprty::String=\"adjclose\": The property to fetch. The other options are \"open\", \"high\", \"low\", \"close\", \"vol\", \"timestamp\".\nrng::Nothing=nothing: The range of the data. The other options are \"1d\", \"5d\", \"1mo\", \"3mo\", \"6mo\", \"1y\", \"2y\", \"5y\", \"10y\".\nfixdt::Bool=true: Fix the dates. If true, the dates will be fixed to the range of the data. If false, the dates will be the dates of the data.\nplot::Bool=false: Plot the data.\nkwargs::NamedTuple=(;title=prprty): The keyword arguments for the plot function. The default title is the property. The other options are legend, legend_title, ylabel, title, size, left_margin, bottom_margin, dpi, and marker.\n\nReturns\n\n::DataFrame: The DataFrame of the data.\n\nMethods\n\nget_data(::Val{:df}, stock::String, startdt::String, enddt::String; prprty::String=\"adjclose\", rng::Nothing=nothing, fixdt::Bool=true)::DataFrame\nget_data(::Val{:vec}, stock::String, startdt::String, enddt::String; prprty::String=\"adjclose\", rng::Nothing=nothing)::Vector{Vector}\n\nExamples\n\njulia> using MFF\n\njulia> get_data(Val(:df), \"AAPL\", \"2020-01-10\", \"2020-01-15\", fixdt=false)\n3×2 DataFrame\n Row │ date        AAPL\n     │ Date        Float64\n─────┼─────────────────────\n   1 │ 2020-01-10  75.89\n   2 │ 2020-01-13  77.5113\n   3 │ 2020-01-14  76.4646\n\njulia> get_data(Val(:df), \"AAPL\", \"2020-01-10\", \"2020-01-15\")\n3×2 DataFrame\n Row │ date        AAPL\n     │ Date        Float64\n─────┼─────────────────────\n   1 │ 2020-01-10  75.89\n   2 │ 2020-01-11  77.5113\n   3 │ 2020-01-12  76.4646\n\njulia> get_data(Val(:df), \"AAPL\", \"2020-01-10\", \"2020-01-15\", prprty=\"open\")\n3×2 DataFrame\n Row │ date        AAPL\n     │ Date        Float64\n─────┼─────────────────────\n   1 │ 2020-01-10  75.956\n   2 │ 2020-01-11  76.2103\n   3 │ 2020-01-12  77.4477\n\njulia> get_data(Val(:df), [\"AAPL\", \"MSFT\"], \"2020-01-10\", \"2020-01-15\", prprty=\"high\")\n3×3 DataFrame\nRow │ date        AAPL     MSFT\n    │ Date        Float64  Float64\n─────┼──────────────────────────────\n  1 │ 2020-01-10  76.4622  158.283\n  2 │ 2020-01-11  77.5382  158.37\n  3 │ 2020-01-12  77.6605  158.652\n\njulia> get_data(Val(:vec), [\"AAPL\", \"MSFT\"], \"2020-01-10\", \"2020-01-15\", prprty=\"high\")\n3×2 Matrix{Float64}:\n76.4622  158.283\n77.5382  158.37\n77.6605  158.652\n\n\n\n\n\n","category":"method"},{"location":"","page":"Home","title":"Home","text":"DocTestSetup  = quote\n    using MFF\nend","category":"page"},{"location":"#Introduction","page":"Home","title":"Introduction","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"This tiny package provides a simple framework for fetching data from the Yahoo Finance API. It is designed to be used with DataFrames.jl and YFinance.jl. However, the DataFrames.jl dependency can be included as an extension in Julia 1.9+. The package is designed for my personal use and is not intended to be used by others. However, if you find it useful, feel free to use it.This tiny package provides a simple framework for fetching data from the Yahoo Finance API. It is designed to be used with DataFrames.jl and YFinance.jl. However, the DataFrames.jl dependency can be included as an extension in Julia 1.9+. The package is designed for my personal use and is not intended to be used by others. However, if you find it useful, feel free to use it.","category":"page"},{"location":"#Quick-Start","page":"Home","title":"Quick Start","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"The package can be installed using the Julia package manager. From the Julia REPL, type ] to enter the Pkg REPL mode and run:","category":"page"},{"location":"","page":"Home","title":"Home","text":"pkg> add https://github.com/shayandavoodii/MFF.git","category":"page"},{"location":"","page":"Home","title":"Home","text":"Fetch Close Prices for [\"AAPL\", \"MSFT\"] from 2020-01-01 to 2020-01-10 and store the result in a DataFrame:","category":"page"},{"location":"","page":"Home","title":"Home","text":"julia> using MFF\n\njulia> get_data(Val(:df), [\"AAPL\", \"MSFT\"], \"2020-01-01\", \"2020-01-10\")\n6×3 DataFrame\n Row │ date        AAPL     MSFT    \n     │ Date        Float64  Float64 \n─────┼──────────────────────────────\n   1 │ 2020-01-02  73.4494  155.762\n   2 │ 2020-01-03  72.7353  153.822\n   3 │ 2020-01-04  73.3149  154.22\n   4 │ 2020-01-05  72.9701  152.814\n   5 │ 2020-01-06  74.1439  155.248\n   6 │ 2020-01-07  75.7188  157.187","category":"page"},{"location":"#Abilites","page":"Home","title":"Abilites","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"The package can fetch open, high, low, close, adj close, and volume data for a given set of tickers. The data can be returned as a DataFrame or a Vector of values or a Matrix of values. Also, there is ability to plot the data using Plots.jl. Here is an example of fetching open prices for [\"AAPL\", \"MSFT\"] from 2020-01-01 to 2020-01-10 and plotting the result:","category":"page"},{"location":"","page":"Home","title":"Home","text":"julia> using MFF\n\njulia> get_data(Val(:vec), [\"AAPL\", \"MSFT\"], \"2020-01-01\", \"2020-01-10\", prprty=\"open\", plot=true)\n6×2 Matrix{Float64}:\n 72.4443  153.977\n 72.6668  153.531\n 71.8452  152.329\n 73.3247  154.501\n 72.6693  154.123\n 75.1343  156.945","category":"page"},{"location":"","page":"Home","title":"Home","text":"And the following plot is generated automatically:  ","category":"page"},{"location":"","page":"Home","title":"Home","text":"<img src=\"assets/Open.png\" width=\"70%\">","category":"page"}]
}
