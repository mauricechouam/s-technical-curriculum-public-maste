# DNA (Deoxyribonucleic acid) is the primary information storage molecule. It is composed of four nucleic acid bases:
# Guanine ('G')
# Cytosine ('C')
# Adenine ('A')
# Thymine ('T').

# RNA (Ribonucleic acid), is the primary messenger molecule in cells. RNA is slightly different from DNA  because its chemical structure and contains no Thymine ('T'). 

# In RNA Thymine is replaced by another nucleic acid Uracil ('U').

# Create a function called `DNA_to_RNA` which translates a given DNA string into RNA.

# For example:

# `DNA_to_RNA("GCAT") returns ("GCAU")`

# OPTION 1
def DNA_to_RNA(dna):
    # split the DNA string where there is a T
    dna = dna.split("T")

    # rejoin the DNA portion of the string without the T, but add in a U instead
    dna = "U".join(dna)

    # return the value
    return dna


# OPTION 2
def DNA_to_RNA(dna):

    # use the .replace method to swap T for U
    return dna.replace('T', 'U')


DNA_to_RNA('GCAT')