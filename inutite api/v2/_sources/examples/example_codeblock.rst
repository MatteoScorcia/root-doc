Code Block example
==================

This is just a page to test code blocks and code highlighting.

.. code-block:: python
    :caption: Mock python code block

    from typing import Iterator

    # This is an example
    class Math:
        @staticmethod
        def fib(n: int) -> Iterator[int]:
            """Fibonacci series up to n."""
            a, b = 0, 1
            while a < n:
                yield a
                a, b = b, a + b

    result = sum(Math.fib(42))
    print("The answer is {}".format(result))


..  code-block:: none
    :caption: Page tree of directory :file:`vendor/composer`

    $ tree vendor/composer
    ├── ClassLoader.php
    ├── LICENSE
    ├── autoload_classmap.php
    ├── ...
    └── installed.json
