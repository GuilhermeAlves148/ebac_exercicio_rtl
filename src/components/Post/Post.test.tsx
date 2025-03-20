import { fireEvent, render, screen } from "@testing-library/react";
import Post from ".";

describe('Testando a seção Post.', () => {
    it('Deve renderizar corretamente.', () => {
        render(
            <Post imageUrl="https://via.placeholder.com/200x200">
                Teste
            </Post>
        );
        expect(screen.getByText('Teste')).toBeInTheDocument();
    });

    it('Deve dar zoom quando a imagem é clickada.', () => {
        render(
            <Post imageUrl="https://via.placeholder.com/200x200">
                Teste
            </Post>
        );

        const image = screen.getByAltText('Conteúdo visual');

        fireEvent.click(image);

        expect(image).toHaveClass('zoom');
        fireEvent.click(image)

        expect(image).not.toHaveClass('zoom');
    });

    it('Deve renderizar os comentários', () => {
        render(
            <Post imageUrl="https://via.placeholder.com/200x200">
                Teste
            </Post>
        );

        expect(screen.getByText('Comentar')).toBeInTheDocument();
    })
})