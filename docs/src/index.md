```@meta
DocTestSetup  = quote
    using MFF
end
```

# Introduction
This tiny package provides a simple framework for fetching data from the Yahoo Finance API. It is designed to be used with `DataFrames.jl` and `YFinance.jl`. However, the `DataFrames.jl` dependency can be included as an extension in Julia 1.9+. The package is designed for my personal use and is not intended to be used by others. However, if you find it useful, feel free to use it.This tiny package provides a simple framework for fetching data from the Yahoo Finance API. It is designed to be used with `DataFrames.jl` and `YFinance.jl`. However, the `DataFrames.jl` dependency can be included as an extension in Julia 1.9+. The package is designed for my personal use and is not intended to be used by others. However, if you find it useful, feel free to use it.

## Quick Start
The package can be installed using the Julia package manager. From the Julia REPL, type `]` to enter the Pkg REPL mode and run:

```julia
pkg> add https://github.com/shayandavoodii/MFF.git
```

Fetch Close Prices for `["AAPL", "MSFT"]` from `2020-01-01` to `2020-01-10` and store the result in a `DataFrame`:

```julia
julia> using MFF

julia> get_data(Val(:df), ["AAPL", "MSFT"], "2020-01-01", "2020-01-10")
6×3 DataFrame
 Row │ date        AAPL     MSFT    
     │ Date        Float64  Float64 
─────┼──────────────────────────────
   1 │ 2020-01-02  73.4494  155.762
   2 │ 2020-01-03  72.7353  153.822
   3 │ 2020-01-04  73.3149  154.22
   4 │ 2020-01-05  72.9701  152.814
   5 │ 2020-01-06  74.1439  155.248
   6 │ 2020-01-07  75.7188  157.187
```

# API

```@autodocs
Modules = [MFF]
```