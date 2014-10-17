1.60.1:
Bug fix in compiled patterns.

1.60:
new checks:
 * dereference iterator and then checking it in condition: 'if (std::isalpha(*i) && i != str.end()) { }'
 * calling pure virtual function from constructor/destructor
 * assert() condition calls function with side effects

improved checking:
 * improved struct member leaks checking
 * improved handling of variable initialisation in 'reassignment of variable (first assignment is redundant)' check
 * better 'Prefer prefix ++/-- operators' checking for iterators
 * handle more complicated patterns in checkIncorrectStringCompare

Lots of false positives and bugs have been fixed.