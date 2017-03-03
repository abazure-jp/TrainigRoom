<?php
namespace Foo\Bar;
include __DIR__ . '/file1.php';

const FOO = 'ヾ(⌒(_๑′௰‵๑)_ʸᵉᵃʰ';
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
        echo 'ふぁいる２だあああああああああ';
        echo PHP_EOL;
    }
}

/* 非修飾名 */
echo '非修飾名' . PHP_EOL;
foo(); // Foo\Bar\foo 関数と解釈されます
foo::staticmethod(); // Foo\Bar\foo クラスの staticmethod メソッドと解釈されます
echo FOO; // 定数 Foo\Bar\FOO と解釈されます
echo PHP_EOL;

/* 修飾名 */
echo '修飾名' . PHP_EOL;
subnamespace\foo();
subnamespace\foo::staticmethod();
echo PHP_EOL . subnamespace\FOO . PHP_EOL;

/* 完全修飾名 */
echo ' =================================== ' . PHP_EOL;
echo '完全修飾名' . PHP_EOL;
\Foo\Bar\foo(); // Foo\Bar\foo 関数と解釈されます
\Foo\Bar\foo::staticmethod(); // Foo\Bar\foo クラスの staticmethod メソッドと解釈されます
\Foo\Bar\subnamespace\foo::staticmethod();
echo \Foo\Bar\FOO; // 定数 Foo\Bar\FOO と解釈されます


?>
