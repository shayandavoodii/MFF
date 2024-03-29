# MFF

[![CI](https://github.com/shayandavoodii/MFF/actions/workflows/ci.yml/badge.svg)](https://github.com/shayandavoodii/MFF/actions/workflows/ci.yml)
[![Dev](https://img.shields.io/badge/docs-dev-blue.svg)](https://shayandavoodii.github.io/MFF)
[![codecov](https://codecov.io/gh/shayandavoodii/MFF/branch/master/graph/badge.svg?token=K6SUOSEU4Q)](https://codecov.io/gh/shayandavoodii/MFF)
[![Codacy Badge](https://app.codacy.com/project/badge/Grade/edb04cda82db4e7e8836ade4177a8874)](https://app.codacy.com/gh/shayandavoodii/MFF/dashboard?utm_source=gh&utm_medium=referral&utm_content=&utm_campaign=Badge_grade)

This tiny package provides a simple framework for fetching data from the Yahoo Finance API. It is designed to be used with `DataFrames.jl` and `YFinance.jl`. However, the `DataFrames.jl` dependency can be included as an extension in Julia 1.9+. The package is designed for my personal use and is not intended to be used by others. However, if you find it useful, feel free to use it.  

# ⚙️Installation
The package can be installed using the Julia package manager. From the Julia REPL, type `]` to enter the Pkg REPL mode and run:

```julia
pkg> add https://github.com/shayandavoodii/MFF.git
```

# Usage
The package provides a single function `get_data` which takes a `Val` object as the first argument that specifies the type of output. The other arguments can be found in the documentation. The following example shows how to use the package to fetch data from the Yahoo Finance API and store it in a `DataFrame`:

```julia
julia> using MFF

julia> get_data(Val(:df), "AAPL", "2020-01-10", "2020-01-15")
3×2 DataFrame
 Row │ date        AAPL
     │ Date        Float64
─────┼─────────────────────
   1 │ 2020-01-10  75.89
   2 │ 2020-01-11  77.5113
   3 │ 2020-01-12  76.4646
```
