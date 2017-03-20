<?php
namespace Foo\Bar\subnamespace;

const FOO = '(U^ω^) アルトくぅ〜ん';
function foo()
{
    echo '=== foo() kokokara ===';
    echo PHP_EOL;
    echo __METHOD__;
    echo PHP_EOL;
    echo __FILE__;
    echo PHP_EOL;
    echo '=== foo() kokomade ===';
    echo PHP_EOL;
    echo PHP_EOL;
}

class foo
{
    static function staticmethod()
    {
        echo 'file1だよ~~';
        echo PHP_EOL;
    }
}

?>
